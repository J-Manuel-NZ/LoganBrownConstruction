import React from 'react'
// import Swiper JS
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../pages/index.css'
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../node_modules/animate.css/animate.css'

const Testimonial = () => {
    const testimonials = [
        {name: 'Justin Manuel', review: 'I recently had the pleasure of working with Logan and his team on a construction project, and I could not be happier with the results. From the moment I contacted them, their team displayed the utmost professionalism and dedication to their craft.'},
        {name: 'Richie McCaw', review: 'I recently had the pleasure of working with Logan and his team on a construction project, and I could not be happier with the results. From the moment I contacted them, their team displayed the utmost professionalism and dedication to their craft.'},
        {name: 'Taika Waititi', review: 'I recently had the pleasure of working with Logan and his team on a construction project, and I could not be happier with the results. From the moment I contacted them, their team displayed the utmost professionalism and dedication to their craft.'}
    ]
  return (
    <div className='testimonial animate__animated animate__fadeInUp'>
      <Swiper
      style={{
        "--swiper-pagination-bullet-inactive-color": "rgba(232,241,242,.5)",
        "--swiper-pagination-color": "#E8F1F2",
        "--swiper-navigation-color": "rgba(232,241,242,.5)",
        "--swiper-navigation-size": "16px"
      }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
                
                <p className='testimonial-review'>{'"' + testimonial.review}</p>
                <p className='testimonial-name'>{'- ' + testimonial.name}</p>
            </SwiperSlide> 
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial