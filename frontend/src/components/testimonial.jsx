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
        {name: 'Nic, Christchurch', review: "Logan is a real craftsman of a builder. He has an exceptional eye for detailing and always delivers quality outcomes and finishes. We have contracted him to build numerous projects around the house over the last 5-years, including bespoke outdoor furniture. He is a super friendly and easy-going guy and provides very good value for money. We would definitely recommend him!"},
        {name: 'Kelly Petrie', review: "What a wonderful experience to finally have a contractor out that takes pride in his work and your home. I had Logan Brown Construction out to quote for some trim to tidy up my kitchen area, the quote was itemised efficiently and easy to understand. Great job completed with clean up. Was so happy with the end result that had him back out to paint and gib a sleepout.I have recommended him to my friends and family, I wouldn't have done so if I wasn't sure they would be as satisfied with the results too."},
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