import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
const headersocials = () => {
  return (
    <div className="header__socials">
        <a href='https://linkedin.com' target='_blank'rel="noreferrer"><FaLinkedin/></a>
        <a href='https://instagram.com' target='_blank'rel="noreferrer"><FaInstagramSquare/></a>
        <a href='https://github.com' target='_blank'rel="noreferrer"><FaGithubSquare/></a>
    </div>
  )
}

export default headersocials