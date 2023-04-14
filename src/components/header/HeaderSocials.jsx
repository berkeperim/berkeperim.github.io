import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiLinkedinLine} from 'react-icons/ri'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {VscGithubAlt} from 'react-icons/vsc'
import {FiTwitter} from 'react-icons/fi'
const HeaderSocials = () => {
  const hideMe = () => {
      document.querySelector("#welcome").classList.toggle("hide");
      document.body.classList.toggle("hidden-scroll");
  };
  return (
    <div className="header__bottom-container">
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/berke-perim" target="_blank"><RiLinkedinLine></RiLinkedinLine></a>
          <a href="https://github.com/berkeperim" target="_blank"><VscGithubAlt></VscGithubAlt></a>
          <a href="https://twitter.com/perimfdev" target="_blank"><FiTwitter></FiTwitter></a>
      </div>
      <div className="header__email">
        <a href="mailto:berke.perim@gmail.com">berke.perim@gmail.com</a>
      </div>
      <div className="header__pullme">
        <a onClick={() => hideMe()}><AiOutlineArrowDown/></a>
      </div>
    </div>
    
  )
}

export default HeaderSocials