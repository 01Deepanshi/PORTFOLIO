import React from 'react'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    name: 'Growth Brew Labs Pvt. Ltd.',
    date: '05/06/23 to 05/07/23',
    review: 'Actively engaged in team meetings and brainstorming sessions, contributing ideas for new features and improvements.Independently worked on a personal project to create a Blog Application Website using ReactJs,MaterialUI and contextAPIs as well as Personal Portfolio using ReactJs , SCSS, showcasing self-initiative and dedication to learning.',
    keySkills: 'Skills Used:HTML, CSS,Javascript, React.js, Node.js, SQL, Express.js, MongoDB'
  },
  {
    name: 'WE Excel Software Pvt. Ltd.',
    date: '08/07/22 to 15/08/22',
    review: 'Learned the basics of JAVA and SQL and its application through a single user based desktop application project.',
    keySkills:'Skills Used:Java, MySQL, NetBeans'
  },
  {
    name: 'Machine Learning Intern',
    date: '25/07/21 to 26/08/21',
    review: 'Compared the performance of various machine learning regression models for breast cancer dataset using python libraries such as Numpy and Pandas .',
    keySkills:'Skills Used:Python, NumPy, Pandas, Google Colab'
  }
]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some of my</h5>
      <h2>Interships</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container">
       {
        data.map (({name,date,review,keySkills},index) =>
        {
          return (

            <SwiperSlide key={index} className='testimonial'>
            <h4 className='client__name'>{name}</h4>
            <h5 className='client__name'>{date}</h5>
              <small className='client__review'>{review}</small>
              <br/>
              <h6 className='client__name'>{keySkills}</h6>
          </SwiperSlide>
          )
        })
       }
     </Swiper>
      </section>
  )
}

export default testimonials