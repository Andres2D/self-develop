import styles from './experience.module.css';
import ExperienceItem from './components/experience-item';
import { useState } from 'react';
import PlusButton from '../../plus-button';

type Props = {
  className: string;
};

const defaultExperience = [
  {
    id: 1,
    title: 'MotoFox Belén',
    jobTitle: 'Frontend developer',
    description: 'Add your description here...',
    initialDate: '2015',
    finalDate: '2018'
  },
  {
    id: 2,
    title: 'VSDC',
    jobTitle: 'Fullstack developer',
    description: 'Add your description here...',
    initialDate: '2015',
    finalDate: '2018'
  },
  {
    id: 3,
    title: 'Accenture',
    jobTitle: 'Frontend developer',
    description: 'Add your description here...',
    initialDate: '2015',
    finalDate: '2018'
  }
];


const Experience = ({ className }: Props) => {
  
  const [experienceList, setExperienceList] = useState(defaultExperience);

  const removeItem = (id: number) => {
    setExperienceList(experience => {
      return experience.filter(exp => exp.id !== id);
    })
  }

  const plusHandler = () => {
    setExperienceList(experience => {
      const id = experience.length ? experience[experience.length - 1].id + 1 : 0;
      return [
        ...experience,
        {
          id,
          title: 'New Experience',
          description: 'Add your description...',
          finalDate: '2010',
          initialDate: '2012',
          jobTitle: 'Job title'
        }
      ]
    })
  };

  const experienceListMap = experienceList.map(experience => (
    <ExperienceItem 
      key={`experience-${experience.id}`}
      description={experience.description}
      finalDate={experience.finalDate}
      initialDate={experience.initialDate}
      jobTitle={experience.jobTitle}
      title={experience.title}
      removeItem={() => removeItem(experience.id)}
    />
  ));
  
  return (
    <aside className={`${className} ${styles.experience}`}>
      <h1 className={styles.title}>Experience</h1>
      <ul className={styles.list}>
        { experienceListMap }
      </ul>
      <PlusButton 
        onClick={plusHandler}
      />
    </aside>
  )
};

export default Experience;
