import styles from './skills.module.css';
import SkillItem from './components/skill-item';
import PlusButton from '../../plus-button';
import { useState } from 'react';

type Props = {
  className: string;
};

const Skills = ({ className }: Props) => {
  const defaultSkills = [
    {
      id: 1,
      title: 'Angular',
      description: 'Advanced knowledge in latest versions',
    },
    {
      id: 2,
      title: 'React',
      description: 'Good knowledge in Remix and NextJS',
    },
    {
      id: 3,
      title: 'GIT',
      description: 'Experience with git, Github and GitLab',
    },
    { id: 4, title: 'DevOps', description: 'Good knowledge of AWS and Azure' },
    {
      id: 5,
      title: 'Node',
      description: 'Backend experience working with REST APIs',
    },
  ];

  const [skills, setSkills] = useState(defaultSkills);

  const plusHandler = () => {
    console.log('Add new skill');
    setSkills(skills => {
      return [
        ...skills,
        {
          id: skills[skills.length - 1].id + 1,
          title: 'New Skill',
          description: 'Description'
        }
      ]
    });
  };

  const skillsListMap = skills.map(({id, title, description}) => {
    return (
      <SkillItem
        key={id}
        item={title}
        description={description}
      />
    );
  });

  return (
    <aside className={`${className} ${styles.skills}`}>
      <h1>Skills</h1>
      <ul>
        {skillsListMap}
      </ul>
     <PlusButton 
      onClick={plusHandler}
     />
    </aside>
  );
};

export default Skills;
