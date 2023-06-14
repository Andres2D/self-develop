import { useDispatch } from 'react-redux';
import { type SidebarOption } from '~/interfaces/interfaces';
import styles from './sidebar-item.module.css';
import { templateActions } from '../../store/template.slice';

type Props = {
  item: SidebarOption;
  clickAction: () => void
}

const SidebarItem = ({item, clickAction}: Props) => {

  const dispatch = useDispatch();

  const handleItemClick = () => {
    dispatch(templateActions.setTemplate({design: item.id}));
    clickAction();
  }; 

  return (
    <li 
      className={`${styles.templateGrid} ${styles[item.id]}`}
      onClick={handleItemClick}
    >
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
