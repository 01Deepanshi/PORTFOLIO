import React from 'react'
import './experiance.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experiance__container'>
      <div className="experiance__frontend">
          <h3>SUBJECTS</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>DATA STRUCTURES</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>ALGORITHMS</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>OOPS</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>OS</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>DBMS</h4>
            </div>
            </article>
          </div>
        </div>
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>HTML</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>CSS</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>JAVASCRIPT</h4>
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>BOOTSTRAP</h4>
            
            </div>
            </article>

            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>REACT</h4>
            
            </div>
            </article>
          </div>
        </div>
       
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>Node JS</h4>
           
            </div>
            </article>
            
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>MongoDB</h4>
            
            </div>
            </article>
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>Express JS</h4>
            
            </div>
            </article>
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
            <div>
            <h4>MySQL</h4>
           
            </div>
            </article>
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
           <div>
           <h4>Python</h4>
            
           </div>
            </article>
            <article className='experiance__details'>
            <BsPatchCheckFill className='experiance__details-icon '/>
           <div>
           <h4>Java</h4>
            
           </div>
           </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default experiance