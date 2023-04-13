import React from 'react'
import './nav.css'
import {AiOutlineUser, AiOutlineFolder, AiOutlineHome} from 'react-icons/ai'
import {BiCodeCurly} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import CTA from '../header/CTA'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><AiOutlineFolder/></a>
      <a href="#workbefore" onClick={() => setActiveNav('#workbefore')} className={activeNav === '#workbefore' ? 'active' : '' }><BiCodeCurly/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail/></a>
      <CTA></CTA>
    </nav>
  )
}

export default Nav