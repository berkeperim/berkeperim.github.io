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
            'Handled frontend development for major e-commerce brands, leveraging advanced algorithms and personalized data solutions developed by the company.',
            "Utilized modern JavaScript to create efficient and scalable frontend architectures.",
            'Collaborated with high-profile clients such as Calvin Klein, Turkcell, Tommy Hilfiger, Atelier Rebul, and more.'
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
        title: 'Neta Bilgi İletişim ve Danışmanlık',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Dec 2018',
        end_date:'Mar 2019',
        content: [
            'I developed a CRM application with features such as a smart search system, data tracking and control system, stock tracking, and reporting, using Laravel for backend development and JavaScript for frontend development.',
            'I was responsible for setting up and managing the entire network infrastructure for a company with 90 employees, ensuring smooth operations and connectivity.',
            'I worked on integrating API data for the CRM application, facilitating seamless communication between various internal systems used by the company.'
        ],
        key: 'neta',
        job: 'IT & Software Lead'
    },
    {
        title: 'Alpha Creative',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jul 2018',
        end_date:'Dec 2018',
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
    },
    {
        title: 'Progela',
        location: 'Eskişehir',
        type: 'Office',
        start_date: 'Jun 2016',
        end_date:'Sep 2016',
        content: [
            'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery',
            'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
            'Websites were developed dynamically using PHP and MySQL and deployed'
        ],
        key: 'progela',
        job: 'Frontend Developer'
    }
    
];
function parseDate(dateStr) {
    const [month, year] = dateStr.split(' ');
    return new Date(`${month} 1, ${year}`);
}

function calculateTotalExperience(companies) {
    let totalMonths = 0;

    companies.forEach(job => {
        const start = parseDate(job.start_date);
        const end = job.end_date === 'Present' ? new Date() : parseDate(job.end_date);

        const monthsDifference = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        totalMonths += monthsDifference;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return { years, months };
}
  
const WorkBefore = () => {
    const { years, months } = calculateTotalExperience(companies);

    return (
        <section id="workbefore">
          <div className="container">
            <span className="corner1"></span>
            <div className="inner-container">
                <div className="section__title">
                    <h3>Building my expertise</h3>
                    <h1>Where I've Worked</h1>
                </div>
                <div className="total-experience">
                    <h4>Total Experience</h4>
                    <p>{years} years and {months} months</p>
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