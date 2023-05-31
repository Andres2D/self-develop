import { useState } from 'react';
import styles from './profile-image.module.scss';

const ProfileImage = () => {

  const [radius, setRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0
  });

  const handleRadiusChange = (evt: any, key: string) => {
    setRadius(state => {
      return {
        ...state,
        [key]: evt.target.value
      }
    })
  };

  return (
    <div className={styles.profile}>
      <img 
        src="https://avatars.githubusercontent.com/u/37199673?v=4" 
        alt="andres-alcaraz"
        className={styles.image}
        style={{ 
          borderTopLeftRadius: `${radius.topLeft}%`, 
          borderTopRightRadius: `${radius.topRight}%`, 
          borderBottomRightRadius: `${radius.bottomRight}%`, 
          borderBottomLeftRadius: `${radius.bottomLeft}%` 
        }}
      />
      <div className={styles.controls}>
        <div>
          top-left: <input type="range" min="0" max="50" onChange={(evt: any) => handleRadiusChange(evt, 'topLeft')} />
        </div>
        <div>
          top-right: <input type="range" min="0" max="50" onChange={(evt: any) => handleRadiusChange(evt, 'topRight')} />
        </div>
        <div>
          bottom-right: <input type="range" min="0" max="50" onChange={(evt: any) => handleRadiusChange(evt, 'bottomRight')} />
        </div>
        <div>
          bottom-left: <input type="range" min="0" max="50" onChange={(evt: any) => handleRadiusChange(evt, 'bottomLeft')} />
        </div>
      </div>
    </div>
  )
};

export default ProfileImage;
