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
          <p>My name is Berke, and I am a passionate Frontend Developer based in Turkey, with extensive experience in crafting dynamic and user-centric web applications. My expertise spans across both frontend and backend development, allowing me to contribute to various aspects of web development.</p>
          
          <p>Throughout my career, I have had the privilege of working with <b>leading advertising agencies</b>, as well as in companies focused on <b>CRM systems, smart call technologies, and ERP solutions</b>. Currently, I am part of a <b>forward-thinking startup</b>, where we develop advanced <b>personalization, recommendation, and predictive technologies</b> for e-commerce brands.</p>
          
          <p>I am proficient in frontend technologies and frameworks such as <b>JavaScript</b>, <b>ReactJS</b>, and <b>jQuery</b>, and have worked with backend technologies including <b>PHP</b>, <b>NodeJS</b>, and <b>Laravel</b>. At present, I am focused on enhancing my skills with <b>ReactJS</b> and <b>NodeJS</b>, aiming to drive innovation and improve the digital experiences I create.</p> 
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About