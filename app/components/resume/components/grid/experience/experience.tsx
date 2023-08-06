import styles from './experience.module.css';
import ExperienceItem from './components/experience-item';

type Props = {
  className: string;
};

const Experience = ({ className }: Props) => {
  return (
    <aside className={`${className} ${styles.experience}`}>
      <h1 className={styles.title}>Experience</h1>
      <ul className={styles.list}>
        <ExperienceItem />
      </ul>
    </aside>
  )
};

export default Experience;
