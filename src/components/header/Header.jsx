import React from 'react'
import Frontend from '../frontend/Frontend'
import Backend from '../backend/Backend'
import Database from '../database/Database'
import Design from '../design/Design'
import Source from '../source/Source'
import ME from '../../assets/1643811951610.jpg'
import Education from '../education/Education'
import Experiences from '../experiences/Experiences'
import Company from '../../assets/hired.png'
import HeaderSocial from './HeaderSocials'
import './header.css'
const Header = () => {
  const company_page = "https://www.linkedin.com/company/personaclick/mycompany/";
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
              <h2 className="header__title">Experience</h2>
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