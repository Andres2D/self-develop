import { type ChangeEvent, useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [settingsToggle, setSettingsToggle] = useState(false);

  const handleSettingsClick = (evt: ChangeEvent<HTMLInputElement>) => {
    setSettingsToggle(evt.target.checked || false);
  };
  return (
    <nav className={styles.navigator}>
      <input
        className={styles.toggle}
        type="checkbox"
        onChange={handleSettingsClick}
      />
      <VscSettings className={styles.icon} />
      <ul
        className={`
              ${styles.templates}
              ${settingsToggle ? styles.switchOn : styles.switchOff}
            `}
      >
        <li className={styles.templateGrid}>
          <div className={`${styles.baseSection} ${styles.profile}`}></div>
          <div className={`${styles.baseSection} ${styles.header}`}></div>
          <div className={`${styles.baseSection} ${styles.skills}`}></div>
          <div className={`${styles.baseSection} ${styles.experience}`}></div>
          <div className={`${styles.baseSection} ${styles.certificates}`}></div>
          <h2 className={styles.sectionLabel}>Classic</h2>
        </li>          
      </ul>
    </nav>
  );
};

export default Sidebar;
