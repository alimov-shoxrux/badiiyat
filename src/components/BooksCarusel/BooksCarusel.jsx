import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import './BooksCarusel.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { books } from '../../lib/books';

export default function BookcApp() {
  return (
    <div className='bookc'>
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {
            books.map((item,index)=>(
                <SwiperSlide className='booksc__item' item={item} ><img src={item.img} alt="" /></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}
