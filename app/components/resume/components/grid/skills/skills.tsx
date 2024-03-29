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
    setSkills(skills => {
      const id = skills.length ? skills[skills.length - 1].id + 1 : 0;
      return [
        ...skills,
        {
          id,
          title: 'New Skill',
          description: 'Description'
        }
      ]
    });
  };

  const removeItemHandler = (id: number) => {
    setSkills(skills => {
      return skills.filter(skill => skill.id !== id);
    });
  }

  const skillsListMap = skills.map(({id, title, description}) => {
    return (
      <SkillItem
        key={`skill-${id}`}
        item={title}
        description={description}
        removeItem={() => removeItemHandler(id)}
      />
    );
  });

  return (
    <aside className={`${className} ${styles.skills}`}>
      <h1 className={styles.title}>Skills</h1>
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
