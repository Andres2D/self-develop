import styles from './experience-item.module.css';

const ExperienceItem = () => {
  return (
    <li className={styles.item}>
      <h1 className={styles.title}>
        MotoFox Belén 
        <p className={styles.dates}>&nbsp; From 2015 to 2017</p>
      </h1>
      <p className={styles.jobTitle}>Software developer</p>
    </li>
  )
};

export default ExperienceItem;
