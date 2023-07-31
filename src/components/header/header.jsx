import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headersocials'
const header = () => {
  return (
    <section id='home'>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Deepanshi Rana</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default header