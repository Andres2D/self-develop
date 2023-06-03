import styles from './main.module.css';
import NewBlank from './new-blank';
import Templates from './templates';

const Main = () => {
  return (
    <section className={styles.container}>
      <NewBlank />
      <Templates />
    </section>
  )
};

export default Main;
