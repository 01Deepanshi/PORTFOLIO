import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hyper Funnel Charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21649281-Funnel-charts-collection-Hyper-charts-UI-Kit'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Line Charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21602175-Line-charts-collection-Hyper-charts-UI-Kit'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bar Charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21613617-Bar-charts-collection-Hyper-charts-UI-Kit'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Data Visualization Charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Hyper Charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21345777-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency & Data Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21602175-Line-charts-collection-Hyper-charts-UI-Kit'
  }
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )   
          })
        }

      </div>
    </section>
  )
}

export default portfolio