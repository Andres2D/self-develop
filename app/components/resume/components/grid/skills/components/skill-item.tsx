import styles from './skill-item.module.css';

type Props = {
  item: string;
  description: string;
}

const SkillItem = ({ item, description }: Props) => {
  return (
    <li className={styles.item}>
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
    </li>
  )
};

export default SkillItem;