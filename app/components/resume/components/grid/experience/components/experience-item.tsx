import styles from './experience-item.module.css';

const ExperienceItem = () => {
  return (
    <li className={styles.item}>
      <header className={styles.header}>
        <input 
          className={styles.title} 
          defaultValue="MotoFox Belén"
          type="text"
        />
        <span className={styles.label}>From</span>
        <input 
          className={styles.dates} 
          defaultValue="2015"
          type="text"
          />
        <span className={styles.label}>To</span>
        <input 
          className={styles.dates} 
          defaultValue="2017"
          type="text"
        />
      </header>
      <input 
        className={styles.jobTitle}
        defaultValue="Frontend developer" 
        type="text"
      />
      <textarea 
        className={styles.description}
        cols={30} 
        rows={10}
        defaultValue={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet non ducimus soluta. Aut maiores vitae et repellat delectus odit dicta, soluta quos iusto perferendis quam reiciendis quis quod laborum?, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet non ducimus soluta. Aut maiores vitae et repellat delectus odit dicta, soluta quos iusto perferendis quam reiciendis quis quod laborum?, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus amet non ducimus soluta. Aut maiores vitae et repellat delectus odit dicta, soluta quos iusto perferendis quam reiciendis quis quod laborum? '}
      />
    </li>
    
  )
};

export default ExperienceItem;
