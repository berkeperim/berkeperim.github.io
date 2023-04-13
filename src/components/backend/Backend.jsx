import React from 'react'
import './backend.css'
import {DiLaravel, DiNodejsSmall, DiPhp} from 'react-icons/di'
const Backend = () => {
  const backend_skills = [
    {name: "NodeJS", Icon: DiNodejsSmall},
    {name: "PHP", Icon: DiPhp},
    {name: "Laravel", Icon: DiLaravel}
];
  return (
    <div className="backend-skills skills-item">
        <h4>Backend Development Skills</h4>
        <div className="backend-skills_container">
            {backend_skills.map(techItem => {
                const {name, Icon} = techItem
                return(
                    <div key={`bullet${name}`} className="backend-skills_bullet">
                        <Icon/>
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Backend