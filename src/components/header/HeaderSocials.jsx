import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  const hideMe = () => {
      document.querySelector("#welcome").classList.toggle("hide");
  };
  return (
    <div className="header__bottom-container">
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/berke-perim" target="_blank"><BsLinkedin></BsLinkedin></a>
          <a href="https://github.com/berkeperim" target="_blank"><FaGithub></FaGithub></a>
          <a href="https://twitter.com/perimfdev" target="_blank"><BsTwitter></BsTwitter></a>
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