import { VscTrash } from 'react-icons/vsc';
import styles from './skill-item.module.css';

type Props = {
  item: string;
  description: string;
  removeItem: () => void
}

const SkillItem = ({ item, description, removeItem }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.inputs}>
        <input 
          className={styles.skill}
          type="text" 
          defaultValue={item}
        />
        <input 
          className={styles.description}
          type="text" 
          defaultValue={description}
        />
      </div>
      <button 
        className={styles.remove}
        onClick={removeItem}
      >
        <VscTrash />
      </button>
    </li>
  )
};

export default SkillItem;