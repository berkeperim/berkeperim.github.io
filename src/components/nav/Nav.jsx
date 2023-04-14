import React from 'react'
import './nav.css'
import {AiOutlineUser, AiOutlineFolder, AiOutlineHome} from 'react-icons/ai'
import {BiCodeCurly} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import CTA from '../header/CTA'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  
  let waitSections = setInterval(() => {
    const sections = document.querySelectorAll("section:not(section#welcome)");
    const navLi = document.querySelectorAll("nav a:not(a.btn)");
    if(sections.length > 0 && navLi.length > 0){
      clearInterval(waitSections);
      console.log(sections);
      console.log(navLi);
      window.onscroll = () => {
        var current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id"); 
          }
        });
    
        navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.getAttribute("href").includes(current)) {
            console.log(li);
            li.classList.add("active");
          }
        });
      };
    }
  },100);
  
 
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><AiOutlineFolder/></a>
      <a href="#workbefore" onClick={() => setActiveNav('#workbefore')} className={activeNav === '#workbefore' ? 'active' : '' }><BiCodeCurly/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail/></a>
      <CTA></CTA>
    </nav>
  )
}

export default Nav