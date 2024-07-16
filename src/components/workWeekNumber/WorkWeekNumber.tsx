import { getISOWeek } from 'date-fns';
import { useTranslation } from 'react-i18next';


const date = new Date();
const workWeekNumber = getISOWeek(date);

export function WorkWeekNumber() {

  const { t } = useTranslation()
  
  return (
    <p>{t('work week')} №{workWeekNumber}</p>
  )
}