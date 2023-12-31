import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
   <footer>
    <a href='#home' className='footer__logo'>Deepanshi</a>
    <ul className="permalinks">
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experiance'>Skills</a></li>
      <li><a href='#services'>Projects</a></li>
      <li><a href='#testimonials'>Internships</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://instagram.com'><FiInstagram/></a>
      <a href='https://twitter.com'><IoLogoTwitter/></a>
    </div>
    <div className='footer__copyright'>
      <small> &copy;Deepanshi. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default footer