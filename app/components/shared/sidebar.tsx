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
      {
        // <h3 className={
        //   `
        //     ${styles.label}
        //     ${settingsToggle ? styles.switchOff : styles.switchOn}
        //   `
        // }
        // >Settings</h3>
      }
      <ul
        className={`
              ${styles.templates}
              ${settingsToggle ? styles.switchOff : styles.switchOn}
            `}
      >
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
