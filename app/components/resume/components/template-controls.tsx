import { VscSave, VscFilePdf } from 'react-icons/vsc';
import styles from './template-controls.module.css';

const TemplateControls = () => {
  return (
    <div className={styles.controls}>
      <input 
        className={styles.templateName}
        type="text" 
        placeholder="new template" 
        defaultValue="Andre's CV"
      />
      <VscSave 
        className={styles.icon} 
        title="Save"
      />
      <VscFilePdf 
        className={styles.icon} 
        title="Download"
      />
    </div>
  )
};

export default TemplateControls;
