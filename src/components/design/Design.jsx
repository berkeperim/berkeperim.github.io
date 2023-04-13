import React from 'react'
import './design.css'
import {FiFigma} from 'react-icons/fi'
import {SiAdobephotoshop, SiAdobeillustrator} from 'react-icons/si'
const Design = () => {
  const design_skills = [
    {name: "Figma", Icon: FiFigma},
    {name: "Illustrator", Icon: SiAdobeillustrator},
    {name: "Photoshop", Icon: SiAdobephotoshop}
];
  return (
    <div className="design-skills skills-item">
        <h4>Design Skills</h4>
        <div className="design-skills_container">
            {design_skills.map(techItem => {
                const {name, Icon} = techItem
                return(
                    <div key={`bullet${name}`} className="design-skills_bullet">
                        <Icon/>
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Design