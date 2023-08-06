import { useSelector } from 'react-redux';
import type { RootState } from '~/interfaces/root';
import styles from './grid.module.css';
import Header from './grid/header';
import Profile from './grid/profile';
import Skills from './grid/skills/skills';
import Experience from './grid/experience/experience';

const Grid = () => {

  const templateState = useSelector((state: RootState) => state.template);

  const gridClasses = () => {
    return `${styles.grid} ${styles[templateState.design]}`;
  };

  return (
    <section className={gridClasses()}>
      {
        templateState.design === 'classic' &&
        <Profile className={`${styles.profile} ${styles.section}`}/>
      }
      {/* <header className={`${styles.header} ${styles.section}`}>header</header> */}
      <Header className={`${styles.header} ${styles.section}`} />
      <Skills className={`${styles.skills} ${styles.section}`} />
      <Experience className={`${styles.experience} ${styles.section}`} />
      <aside className={`${styles.links} ${styles.section}`}>links</aside>
      {
        templateState.design !== 'minimalist' &&
        <article className={`${styles.certificates} ${styles.section}`}>certificates</article>
      }
    </section>
  )
};

export default Grid;
