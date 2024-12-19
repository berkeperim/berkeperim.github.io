import React from 'react'
import Frontend from '../frontend/Frontend'
import Backend from '../backend/Backend'
import Database from '../database/Database'
import Design from '../design/Design'
import Source from '../source/Source'
import ME from '../../assets/1643811951610.jpg'
import Education from '../education/Education'
import Experiences from '../experiences/Experiences'
import Company from '../../assets/personaclick.png'
import HeaderSocial from './HeaderSocials'
import './header.css'
import { companies } from '../experiences/Experiences'

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

const Header = () => {
  const company_page = "https://www.linkedin.com/company/personaclick/mycompany/";
  const { years, months } = calculateTotalExperience(companies);

  return (
    <section id="home">
      <header>
        <div className="container header__container">
          <div className="header__info header__left">
            <img className="header__img" src={ME} />
            <h4>Hello I'm</h4>
            <h1>Berke Perim</h1>
            <div className="header__detail">
              <h5>Frontend Developer</h5>
              <a href={company_page}>
                <img src={Company} alt="Personaclick" />
              </a>
            </div>
            <h2 className="header__title">Skills</h2>
            <div id="header__skills" className="content__container">
              <Frontend/>
              <Backend/>
              <Database/>
              <Design/>
              <Source/>
            </div>
          </div>
          <div className="header__right">
            <div className="header__right-item">
              <h2 className="header__title">Education</h2>
              <div className="content__container">
                <Education></Education>
              </div>
            </div>
            <div className="header__right-item">
              <h2 className="header__title">
                  <div className="header__top">
                      <span>Experiences</span>
                      <div className="header-total-experience">
                          <p>{years} years and {months} months</p>
                      </div>
                  </div>
              </h2>
              <div className="content__container">
                <Experiences></Experiences>
              </div>
            </div>
          </div>
          <HeaderSocial></HeaderSocial>
        </div>
      </header>
    </section>
   
  )
}

export default Header