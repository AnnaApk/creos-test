import { LangChoice } from "../langChoice";
import { ThemeChoice } from "../themeChoice";
import styles from './themeBlock.module.css';

export function ThemeBlock() {

  return (
    <div className={styles.container}> 
      <LangChoice />
      <ThemeChoice />
    </div>
  )
}
