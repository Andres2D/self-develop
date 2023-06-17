import { type ChangeEvent, useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import SidebarItem from './sidebar-item';
import { sidebarOptions } from '../../../constants/constants';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [settingsToggle, setSettingsToggle] = useState(false);

  const handleSettingsClick = (evt?: ChangeEvent<HTMLInputElement>) => {
    setSettingsToggle(evt?.target.checked || false);
  };

  const optionsMap = sidebarOptions.map(option => {
    return (
      <SidebarItem 
        key={option.id} 
        item={option} 
        clickAction={handleSettingsClick}
      /> 
    );
  });

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
              ${settingsToggle ? styles.switchOff : styles.switchOn}
            `}
      >  
        {optionsMap}
      </ul>
    </nav>
  );
};

export default Sidebar;
