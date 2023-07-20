import React from 'react'
// import Swiper JS
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../pages/index.css'
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// These will become null and void once the logic is implemented below
// import {image1} from '../../public/assets/hero_img.png'
// import {image2} from '../../public/assets/secondary_img.png'

const ImageSlider = ({ images }) => {
    const imageArray = images;
  return (
    <div className='slider'>
      <Swiper
        style={{
          "--swiper-pagination-bullet-inactive-color": "rgba(232,241,242,.5)",
          "--swiper-pagination-color": "#E8F1F2",
          "--swiper-navigation-color": "rgba(232,241,242,.5)",
          "--swiper-navigation-size": "16px",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imageArray.map((image) => (
          <SwiperSlide  key={image.alt}>
            <img class="slide" src={image.image} alt={image.alt} />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider