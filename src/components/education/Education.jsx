import React from 'react'
import './education.css'
import UNI from '../../assets/education.png'
const Education = () => {
  const edu_info = [
    {name: "Anadolu University", start_date: "Sep 2013", end_date: "Jan 2019", degree: "Bachelor", department: "Computer Education and Instructional Technology"}
];
  return (
   
    <div className="education__box">
        <div className="education__image">
            <img className="education__img" src={UNI} />
        </div>
        
            {edu_info.map(object => {
                const {name, start_date, end_date, degree, department} = object
                return(
                    <div key={`content_${name}`} className="education__content">
                        <div className="education__name">
                            <h4>{name}</h4>
                        </div>
                        <div className="education__date-range">
                            <h5>{start_date} - {end_date}</h5>
                        </div>
                        <div className="education__degree">
                            <h5>{degree} - {department}</h5>
                        </div>
                    </div>

                );
            })}
           
    </div>

  )
}

export default Education