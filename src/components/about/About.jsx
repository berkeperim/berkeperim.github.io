import React from 'react'
import './about.css'
import ME from '../../assets/1643811951610.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section__title">
          <h3>Get To Know</h3>
          <h1>About Me</h1>
        </div>
        <div className="about__container">
          <div className="about__content">
            <p>My name is Berke and I enjoy creating things that live on the internet. I'm a Turkey based Frontend Developer and a bit of Backend Developer :)</p>
            <p>I have more than 5 years of experience as a Frontend Developer. I have had the privilage of working at <b>many advertising agencies</b>, <b>a company that develops a CRM project - smart call system - with small ERP structure</b>, <b>a company that develops booking applications</b> and currently <b>a huge startup that produces personalization, recommendation and predictive technology for e-commerce brands.</b></p>
            <p>I have hands on experience using front-end technologies and frameworks like <b>Javascript</b>, <b>ReactJS</b>, <b>jQuery</b> and back-end technologies and frameworks like <b>PHP</b>, <b>NodeJS</b>, <b>Laravel</b>. I am currently working on <b>ReactJS</b> and <b>NodeJS</b> to further my proficiency in these languages.</p> 
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About