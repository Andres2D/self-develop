import styles from './grid.module.css';
import { VscSettings } from 'react-icons/vsc';

const Grid = () => {
  return (
    <section className={styles.resume}>
      <nav className={styles.navigator}>
        <button className={styles.settings}><VscSettings /></button>
      </nav>
      <section className={styles.grid}>
        <div className={`${styles.profile} ${styles.section}`}>profile</div>
        <header className={`${styles.header} ${styles.section}`}>header</header>
        <aside className={`${styles.skills} ${styles.section}`}>skills</aside>
        <article className={`${styles.experience} ${styles.section}`}>experience</article>
        <aside className={`${styles.links} ${styles.section}`}>links</aside>
        <article className={`${styles.certificates} ${styles.section}`}>certificates</article>
      </section>
    </section>
  )
};

export default Grid;
