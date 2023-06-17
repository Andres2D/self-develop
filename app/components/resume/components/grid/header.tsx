import styles from './header.module.css';

type Props = {
  className: string;
};

const Header = ({ className }: Props) => {
  return (
    <div className={`${className} ${styles.header}`}>
      <h1 className={styles.title}>Andres Alcaraz</h1>
      <h3 className={styles.role}>Software developer</h3>
    </div>
  )
};

export default Header;
