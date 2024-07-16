import { ThemeBlock } from '../themeBlock';
import { WorkWeekNumber } from '../workWeekNumber';
import styles from './header.module.css';

export function Header() {

  return (
    <header className={styles.header}>
      <WorkWeekNumber />
      <ThemeBlock />
    </header>
  )
}
