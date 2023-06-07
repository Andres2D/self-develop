import { type SidebarOption } from '~/interfaces/interfaces';
import styles from './sidebar-item.module.css';

type Props = {
  item: SidebarOption;
}

const SidebarItem = ({item}: Props) => {
  return (
    <li className={`${styles.templateGrid} ${styles[item.id]}`}>
      {
        item.id === 'classic' &&
        <div className={`${styles.baseSection} ${styles.profile}`}></div>
      }
      <div className={`${styles.baseSection} ${styles.header}`}></div>
      <div className={`${styles.baseSection} ${styles.skills}`}></div>
      <div className={`${styles.baseSection} ${styles.experience}`}></div>
      {
        item.id !== 'minimalist' &&
        <div className={`${styles.baseSection} ${styles.certificates}`}></div>
      }
      <h2 className={styles.sectionLabel}>{item.label}</h2>
    </li>   
  )
};

export default SidebarItem;
