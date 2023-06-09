import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonials() {
    return (
        <>
            <div className="testimonial-text">
                <span className="text-center block mt-10 text-2 font-jua uppercase text-2xl">Testimonials</span>
                <span className="block text-center mt-3 text-1 font-outfit font-semibold text-[60px] leading-[76pxß]">Read our Raving Reviews</span>
                <span className="block text-center mt-11 text-1 opacity-50 text-xl">Written by real travelers, just like you!</span>
            </div>
            {/* <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }}>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
            </Swiper> */}
        </>
    );
}
