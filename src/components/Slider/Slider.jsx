import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import alisher from './img/alisher-navoiy.jpg'
import mirzoulubgek from './img/mirzo-ulugbek.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

export default function SliderApp() {
  return (
    <div className='slider__app'>
      <Swiper
      pagination={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       modules={[Autoplay,Pagination]} className="mySwiper">
        <SwiperSlide className='alloma__img'>
            <h1>Temuriylar <br /> Davri <br /> adabitoyi</h1>
            <img src={alisher} alt="" />
        </SwiperSlide>
        <SwiperSlide className='alloma__img'>
            <h1>Alisher navoiy</h1>
            <img src={alisher} alt="" />
            
        </SwiperSlide>
        <SwiperSlide className='alloma__img'>
            <h1>Alisher navoiy</h1>
            <img src={alisher} alt="" />
            
        </SwiperSlide>
        <SwiperSlide className='alloma__img'>
            <h1>Alisher navoiy</h1>
            <img src={alisher} alt="" />
            
        </SwiperSlide>
 
      </Swiper>
    </div>
  );
}
