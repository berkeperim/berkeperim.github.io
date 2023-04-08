import React from 'react'
import CV from '../../assets/Berke_Perim_Resume.pdf'
const CTA = () => {
  return (
      <a href={CV} className="btn cta-btn" download>Download CV</a>
  )
}

export default CTA