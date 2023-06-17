import styles from './profile.module.css';

type Props = {
  className: string;
}

const Profile = ({className}: Props) => {
  const mockProfilePhoto = 'https://avatars.githubusercontent.com/u/37199673?s…00&u=575219bac83548a2fd0338c4f7162e1517863b7a&v=4';
  return (
    <section className={`${className} ${styles.profile}`}>
      <img 
        className={styles.image}
        src={mockProfilePhoto} 
        alt="Profile" 
      />  
    </section>
  )
};

export default Profile;
