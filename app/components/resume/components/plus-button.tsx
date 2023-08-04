import { VscAdd } from "react-icons/vsc";
import styles from './plus-button.module.css';

type Props = {
  onClick: () => void
};

const PlusButton = ({ onClick }: Props) => {
  return (
    <button 
      onClick={onClick}
      className={styles.plus}
    >
      <VscAdd />
    </button>
  )
};

export default PlusButton;
