import styles from './header.module.css';

type Props = {
  className: string;
};

const defaultDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const Header = ({ className }: Props) => {
  return (
    <div className={`${className} ${styles.header}`}>
      <input 
        className={styles.title}
        type="text" 
        defaultValue="Andres Alcaraz"
      />
      <input 
        className={styles.role}
        type="text"
        defaultValue="Software developer"
      />
      <textarea 
        className={styles.description}
        name="" 
        id=""
        defaultValue={defaultDescription}
        cols={10} 
        rows={10}
      />
    </div>
  )
};

export default Header;
