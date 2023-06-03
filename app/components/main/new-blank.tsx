import { useNavigate } from '@remix-run/react';
import styles from './new-blank.module.css';

export const NewBlank = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resume/123');
  };

  return (
    <div className={styles.new} onClick={handleClick}>
      <h3 className={styles.label}>Blank</h3>
    </div>
  );
};

export default NewBlank;
