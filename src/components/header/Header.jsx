import React from 'react'
import Frontend from '../frontend/Frontend'
import Backend from '../backend/Backend'
import Database from '../database/Database'
import Design from '../design/Design'
import ME from '../../assets/1643811951610.jpg'
import Company from '../../assets/hired.png'
import HeaderSocial from './HeaderSocials'
import './header.css'
const Header = () => {
  const company_page = "https://www.linkedin.com/company/personaclick/mycompany/";
  return (
    <header>
      <div className="container header__container">
        <div className="header__info">
          <img className="header__img" src={ME} />
          <h4>Hello I'm</h4>
          <h1>Berke Perim</h1>
          <div className="header__detail">
            <h5 className="text-light">Frontend Developer</h5>
            <a href={company_page}>
              <img src={Company} alt="Personaclick" />
            </a>
          </div>
          <Frontend/>
          <Backend/>
          <Database/>
          <Design/>
        </div>
        
        <HeaderSocial></HeaderSocial>
        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header