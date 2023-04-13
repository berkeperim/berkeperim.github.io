import React from 'react'
import './source.css'
import {DiGit} from 'react-icons/di'
const Source = () => {
  const source_skills = [
    {name: "Git", Icon: DiGit}
];
  return (
    <div className="backend-skills skills-item">
        <h4>Source Control Tools</h4>
        <div className="source-skills_container">
            {source_skills.map(techItem => {
                const {name, Icon} = techItem
                return(
                    <div key={`bullet${name}`} className="source-skills_bullet">
                        <Icon/>
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Source