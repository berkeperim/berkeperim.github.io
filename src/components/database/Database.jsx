import React from 'react'
import './database.css'
import {DiMysql} from 'react-icons/di'
const Database = () => {
  const database_skills = [
    {name: "MySQL", Icon: DiMysql}
];
  return (
    <div className="database-skills">
        <h4>Database Development Skills</h4>
        <div className="database-skills_container">
            {database_skills.map(techItem => {
                const {name, Icon} = techItem
                return(
                    <div className="database-skills_bullet">
                        <Icon/>
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Database