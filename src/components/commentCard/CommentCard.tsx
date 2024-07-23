import { Avatar, ListItemText, Typography, styled } from "@mui/material";
import { IComment } from "../../interfaces/interfaces";
import { differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";
import { useTranslation } from "react-i18next";

interface IProps {
  card: IComment;
}

const StyledTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 10px 0;
`;

export function CommentCard({card}:IProps){

  const now = new Date();
  const minutesDifference = differenceInMinutes(now, card.date_created) % 60;
  const hoursDifference = differenceInHours(now, card.date_created) % 24;
  const daysDifference = differenceInDays(now, card.date_created);

  const { t } = useTranslation()

  const passedTimeStr = `${daysDifference}${t('days')}` + ' ' + `${hoursDifference}${t('hours')}` + ' ' + `${minutesDifference}${t('minutes')}`

  const header = `${card.designer.username}, ${t('issue')} ${card.issue}`

  return (
    <>
      <Avatar alt={card.designer.username} src={card.designer.avatar} />
      <ListItemText
      sx={{paddingLeft: '20px'}}
        primary={header}
        secondary={
          <Typography  component="span">
            <StyledTypography
              variant="body2"
              color="text.primary"
            >
              {card.message}
            </StyledTypography>
          {passedTimeStr}
          </Typography>
        }
      >
      </ListItemText>
    </>
  )
}
