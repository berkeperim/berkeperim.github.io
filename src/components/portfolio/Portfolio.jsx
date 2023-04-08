import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.PNG'
const data = [
  {
    id:1,
    image:IMG1,
    title: 'Portfolio Web Site With ReactJS',
    github: 'https://github.com'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>Portfolio Web Site With ReactJS</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio