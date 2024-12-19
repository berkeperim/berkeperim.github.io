import React, { useState } from 'react';
import './workbefore.css'
import TabView from '../TabView/TabView'

const companies = [
    {
        title: 'PersonaClick',
        location: 'İstanbul',
        type: 'Remote',
        start_date: 'Sep 2022',
        end_date:'Present',
        content: [
            'Run the frontend development processes of huge e-commerce brands using the algorithms and personalized data of the product developed by the company.',
            "Using Javascript (ES6) while running this frontend development process",
            'Clients included Watsons, Vivense, Atelier Rebul and more'
        ],
        key: 'persona',
        job: 'Frontend Developer'
    },
    {
        title: 'Esdisis Bilişim',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Aug 2019',
        end_date:'Jun 2022',
        content: [
            'Worked on Frontend, Backend and Database optimizing parts of the existing web-based real-time call system that includes features like Product & Stock & Logistic Management, Customer Management, Calendar, To-Do etc.',
            "Led the frontend developments in the company's new CRM project and took an active role in the planning, design and determination of the technologies to be used from the beginning of the project until I left",
            'Used PHP, Codeigniter, Javascript, jQuery, Tailwind technologies while developing frontend and backend in these projects. Also used MySQL for database optimization.'
        ],
        key: 'esdisis',
        job: 'Full-stack Developer'
    },
    {
        title: 'Bulutsoft Yazılım',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Mar 2019',
        end_date:'June 2019',
        content: [
            'I was part of the team that developed a CRM application for travel agencies using NodeJS and Javascript',
            'In addition to this, I was also part of a team that developed booking websites for clients. I worked as a Full Stack Developer in these projects',
            'I used Laravel and VueJS libraries in these projects',
            'While developing these booking websites, I worked with the JSON data that comes with the API of the developed CRM application'

        ],
        key: 'bulut',
        job: 'Frontend Developer'
    },
    {
        title: 'Alpha Creative',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jul 2018',
        end_date:'Jan 2019',
        content: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery',
            'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
            'Websites were developed dynamically using PHP and MySQL and deployed'
        ],
        key: 'alpha',
        job: 'Frontend Developer'
    },
    {
        title: 'Pill Digital',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jun 2017',
        end_date:'Sep 2017',
        content: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery',
            'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
            'Websites were developed dynamically using PHP and MySQL and deployed'
        ],
        key: 'pill',
        job: 'Frontend Developer'
    }
    
];

  
const WorkBefore = () => {
    return (
        <section id="workbefore">
          <div className="container">
            <span className="corner1"></span>
            <div className="inner-container">
                <div className="section__title">
                <h3>Building my expertise</h3>
                <h1>Where I've Worked</h1>
                </div>
                <div className="workbefore__container">
                    <TabView tabs={companies}></TabView>
                </div>
            </div>
            
            <span className="corner2"></span>
          </div>
        </section>
      )
}
  
export default WorkBefore;