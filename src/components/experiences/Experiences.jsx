import React, { useState } from 'react';
import './experiences.css'
import PILL from '../../assets/pill.png'
import ALPHA from '../../assets/alpha.png'
import BULUT from '../../assets/bulutsoft.png'
import ESDISIS from '../../assets/esdisis.png'
import PERSONA from '../../assets/hired-logo.png'


const companies = [
    {
        img: PERSONA,
        title: 'PersonaClick',
        location: 'İstanbul',
        type: 'Remote',
        start_date: 'Sep 2022',
        end_date:'Present',
        content: 'Üçüncü içerik',
        key: 'persona',
        job: 'Frontend Developer'
    },
    {
        img: ESDISIS,
        title: 'Esdisis Bilişim',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Aug 2019',
        end_date:'Jun 2022',
        content: 'İkinci içerik',
        key: 'esdisis',
        job: 'Full-stack Developer'
    },
    {
        img: BULUT,
        title: 'Bulutsoft Yazılım',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Mar 2019',
        end_date:'June 2019',
        content: 'Birinci içerik',
        key: 'bulut',
        job: 'Frontend Developer'
    },
    {
        img: ALPHA,
        title: 'Alpha Creative',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jul 2018',
        end_date:'Jan 2019',
        content: 'İkinci içerik',
        key: 'alpha',
        job: 'Frontend Developer'
    },
    {
        img: PILL,
        title: 'Pill Digital',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jun 2017',
        end_date:'Sep 2017',
        content: 'Birinci içerik',
        key: 'pill',
        job: 'Frontend Developer'
    }
    
];

  
const Experiences = () => {

    return (
            <div className="experiences_container">
                {companies.map(expItem => {
                    const {title, location, type, start_date, end_date, img, key, job} = expItem
                    return(
                        <div key={`experiences__${key}`} className={`experiences__box `}>
                            <div className="experiences__img">
                                <img src={img} alt="" />
                            </div>
                            <div className="experiences__content">
                                <h4>{title}</h4>
                                <h5>{location} - {type}</h5>
                                <h5>{start_date} - {end_date}</h5>
                                <small>{job}</small>
                            </div>
                        </div>
                    );
                })}
            </div>
    );
}
  
export default Experiences;