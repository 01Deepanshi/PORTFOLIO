import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineLibraryBooks} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__image'>
          <img src={ME} alt='about image'/>
          </div>
          </div>
          
          <div className="about__content">
            <div className="about__cards">
            <article className='about__card'>
             <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>Fresher</small>
              </article>

              <article className='about__card'>
              <MdOutlineLibraryBooks className='about__icon'/>
              <h5>Projects</h5>
              <small>5 completed</small>
              </article>

              <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Internships</h5>
              <small>3 during B.E.</small>
            </article>
            </div>
            <p>
            I am a talented, ambitious and hardworking individual, with broad skills and experience in Front-end as well 
            as back-end Development. Furthermore, I am adept at handling multiple tasks on a daily basis competently and 
            at working well under pressure.<br/>A key strength is communication; building strong relationships with people in 
            order to deliver the best results.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
          </div>  
      </section>
  )
}

export default About