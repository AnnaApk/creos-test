import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { DesignerWithMedian } from "../../interfaces/interfaces"
import { useTranslation } from "react-i18next";

interface IProp {
  designer : DesignerWithMedian;
  index: number;
}

export function DesignerCard({designer, index}: IProp) {

  const { t } = useTranslation();

  const title = (index + 1 ) + ". " + designer.username

  return (
    <Card sx={{ width: '300px', padding: '20px', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Avatar src={designer.thumbnails.avatar} />
      <CardContent>
        <CardHeader title={title} />
        <Typography>{t('median')} {designer.median}</Typography>
        <Typography>{t('done issues')} {designer.doneIssues}</Typography>
      </CardContent>
    </Card>
  )
}
