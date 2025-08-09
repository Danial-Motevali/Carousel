import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Component from './Component';

export default function App() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Use slideToLoop so Swiper picks the correct looped clone
      swiperRef.current.swiper.slideToLoop(1, 0); // 1 = your desired starting index
    }
  }, []);

  return (
    <div className='mt-4'>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1.25}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide><Component message='0'/></SwiperSlide>
        <SwiperSlide><Component message='1'/></SwiperSlide>
        <SwiperSlide><Component message='2'/></SwiperSlide>
        <SwiperSlide><Component message='3'/></SwiperSlide>
      </Swiper>
    </div>
  );
}
