import { useSelector } from 'react-redux';
import type { RootState } from '~/interfaces/root';
import styles from './grid.module.css';

const Grid = () => {

  const templateState = useSelector((state: RootState) => state.template);

  console.log(templateState.design);

  return (
    <section className={styles.grid}>
      <div className={`${styles.profile} ${styles.section}`}>profile</div>
      <header className={`${styles.header} ${styles.section}`}>header</header>
      <aside className={`${styles.skills} ${styles.section}`}>skills</aside>
      <article className={`${styles.experience} ${styles.section}`}>experience</article>
      <aside className={`${styles.links} ${styles.section}`}>links</aside>
      <article className={`${styles.certificates} ${styles.section}`}>certificates</article>
    </section>
  )
};

export default Grid;
