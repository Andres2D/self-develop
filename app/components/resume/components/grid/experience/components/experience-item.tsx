import { VscTrash } from 'react-icons/vsc';
import styles from './experience-item.module.css';

type Props = {
  title: string,
  initialDate: string,
  finalDate: string,
  jobTitle: string,
  description: string,
  removeItem: () => void
}

const ExperienceItem = ({
  description,
  finalDate,
  initialDate,
  jobTitle,
  removeItem,
  title
}: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <header className={styles.header}>
          <input 
            className={styles.title} 
            defaultValue={title}
            type="text"
          />
          <span className={styles.label}>From</span>
          <input 
            className={styles.dates} 
            defaultValue={initialDate}
            type="text"
            />
          <span className={styles.label}>To</span>
          <input 
            className={styles.dates} 
            defaultValue={finalDate}
            type="text"
          />
        </header>
        <input 
          className={styles.jobTitle}
          defaultValue={jobTitle}
          type="text"
        />
        <textarea 
          className={styles.description}
          cols={30} 
          rows={3}
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

export default ExperienceItem;
