import React from 'react'
import './frontend.css'
import {DiLess, DiSass, DiCss3, DiHtml5, DiJavascript1, DiJqueryLogo, DiReact} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
const Frontend = () => {
  const frontend_skills = [
    {name: "Javascript", Icon: DiJavascript1},
    {name: "jQuery", Icon: DiJqueryLogo},
    {name: "ReactJS", Icon: DiReact},
    {name: "HTML5", Icon: DiHtml5},
    {name: "CSS3", Icon: DiCss3},
    {name: "SASS", Icon: DiSass},
    {name: "LESS", Icon: DiLess},
    {name: "TailwindCSS", Icon: SiTailwindcss}
];
  return (
    <div className="frontend-skills">
        <h4>Frontend Development Skills</h4>
        <div className="frontend-skills_container">
            {frontend_skills.map(techItem => {
                const {name, Icon} = techItem
                return(
                    <div className="frontend-skills_bullet">
                        <Icon/>
                        <span>{name}</span>
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Frontend