import { useQuery } from "@tanstack/react-query";
import { getDesigners } from "../../api/designer";
import { differenceInMinutes } from "date-fns";
import { DesignerWithMedian } from "../../interfaces/interfaces";
import { useTranslation } from "react-i18next";
import { DesignerCard } from "../designerCard";
import { List, ListItem } from "@mui/material";

export function TopTenDesigners() {
  const { isPending, error, data } = useQuery({
    queryKey: ["designers"],
    queryFn: getDesigners,
  });

  const { t } = useTranslation();

  if (isPending) {
    return <p>is loading ... </p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }

  const designersWithMedian:DesignerWithMedian[] = data.map(designer => {
    const spendTime = designer.issues
    .filter(issue => (issue.status === 'Done' && issue.date_finished_by_designer !== null && issue.date_started_by_designer !== null))
    .map(issue => differenceInMinutes(issue.date_finished_by_designer as string , issue.date_started_by_designer as string))
    .sort((a,b) => a - b);

    let median: number;
    if (spendTime.length % 2) {
      median = spendTime[Math.floor(spendTime.length/2)]
    } else {
      median = (spendTime[spendTime.length/2] + spendTime[spendTime.length/2 - 1]) / 2;
    }

    const doneIssues = designer.issues.filter(issue => issue.status === 'Done').length;

    return {
      ...designer,
      median,
      doneIssues
    } as DesignerWithMedian;
  })

  const bestDesigners = designersWithMedian
  .sort((a,b) => b.doneIssues - a.doneIssues)
  .slice(0,10)
  .sort((a,b) => a.median - b.median) 

  const style = {
    display : 'flex',
    flexWrap : 'wrap',
    gap : '20px',
    margin : 'auto',
    width : '100%',
    justifyContent : 'center'
  }

  return (
    <>
      <h1>{t('top 10')}</h1>
      <List sx={style} >
      {bestDesigners.map((el, i) => 
        <ListItem key={el.username} sx={{width: 'fit-content'}}>
          <DesignerCard designer={el} index={i} />
        </ListItem>
      )}
      </List>
    </>
  );
}
