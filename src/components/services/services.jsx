import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>My recent Work</h5>
      <h2>PROJECTS</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>CHITCHAT WEB APPLICATION</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users can send and receive real-time messages instantly, creating a dynamic chat experience similar to WhatsApp.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p> The application enables users to share images and files, enhancing communication capabilities.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>A secure user authentication system ensures that only registered users have access to the chat functionality.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users' online and offline status is displayed, indicating whether they are actively connected to the application.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Conversations are organised in a user-friendly chat interface, facilitating easy navigation and communication.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>BLOGIFY: Blog Application</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Implemented a secure user authentication system allowing users to register, login, and logout of the application.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Developed a feature-rich blog editor that enables users to compose, edit or publish captivating blog posts with ease.Blog can be category specific.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Created an interactive comment system, enabling users to engage in discussions and provide feedback on blog posts.If User wants they can delete the comment posted by them.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Implemented a functionality to help users find specific blog posts based on categories mentioned.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Ensured a seamless user experience across various devices and screen sizes through responsive design practices.</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className="service__head">
            <h3>GIGHUB</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users can register and log in to the platform using their credentials.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users can explore a vast array of gigs offered by sellers and search for specific services using search filters and categories.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users can view detailed gig information, including gig description, pricing, seller reviews, and ratings.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Users can access seller profiles to learn more about their expertise, ratings, and past work.</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/>
             <p>Registered users have access to dashboard where they can view their purchase history, and ongoing orders.</p>
            </li>
          </ul>
        </article>
      </div>
      </section>
  )
}

export default services