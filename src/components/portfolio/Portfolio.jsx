import React from 'react'
import './portfolio.css'

const data = [
  {
    thumb:"berkeperim.github.io",
    title: 'My Portfolio Web Site',
    github: 'https://github.com',
    status: "Deployed",
    description:'My portfolio that I designed and developed using React.',
    technologies: [
      {name:"React"},
      {name:"Javascript"},
      {name:"CSS3"},
      {name:"HTML5"}
    ]
  },
  {
    thumb:"Folsis",
    title: 'Folsis',
    github: 'https://github.com',
    status:'In Progress',
    description:'A system that tracks shipments, checks balances, manages employees and customers, and has a module and authorization structure.',
    technologies: [
      {name:"Javascript"},
      {name:"jQuery"},
      {name:"PHP"},
      {name:"MySQL"},
      {name:"CSS3"},
      {name:"HTML5"}
    ]
  },
  {
    thumb:"Lil' Interest Monster",
    title: "Lil' Interest Monster",
    github: 'https://github.com',
    status:'In Progress',
    description:'A Javascript-based game for creating asset management and investment strategies. It also has its own stock market.',
    technologies: [
      {name:"Javascript"},
      {name:"jQuery"},
      {name:"CSS3"},
      {name:"HTML5"}
    ]
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <div className="container">
        <div className="section__title">
          <h3>My Recent Work</h3>
          <h1>Projects</h1>
        </div>
        <div className="portfolio__container">
         

        {
          data.map(({title, github, description, technologies, status}) => {
            return (
                <div key={`item_${title}`} className="portfolio__item">
                      <div className="portfolio__item-status">{status}</div>
                      <div className="portfolio__item-title"><h2>{title}</h2></div>
                      <div className="portfolio__item-description"><p>{description}</p></div>
                      <div className="portfolio__item-technologies">
                      {
                      technologies.map(({name}) => { 
                        return(
                          <span key={`technology_${name}`} className="portfolio__item-technologies-item">
                            <span>{name}</span>
                          </span>
                        )
                      })
                      }
                      </div>
                </div>
            )
          })
        }
          
        </div>
      </div>
    </section>
  )
}

export default Portfolio