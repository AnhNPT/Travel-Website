import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function Testimonials() {
    return (
        <>
            <div className="testimonial-text">
                <span className="text-center block mt-10 text-2 font-jua uppercase text-2xl">Testimonials</span>
                <span className="block text-center mt-3 text-1 font-outfit font-semibold text-[60px] leading-[76pxß]">Read our Raving Reviews</span>
                <span className="block text-center mt-11 text-1 opacity-50 text-xl">Written by real travelers, just like you!</span>
            </div>
            <Swiper className="mt-20" spaceBetween={38} slidesPerView={3} >
                <SwiperSlide>
                    <div className="flex flex-col pt-10 px-8 pb-5 bg-4 rounded-sm border-[2px] border-1 drop-shadow-custom-2">
                        <span>Liam S.</span>
                        <span>Hollywood, CA</span>
                        <span>I booked a custom getaway to Paris (for myself) at great price and the website even helped me book tours and activities. The customer service was excellent and I was reimbursed for lost luggage!</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col pt-10 px-8 pb-5 bg-[#FAF9FF] rounded-sm border-[2px] border-1 drop-shadow-custom-2">
                        <span>Liam S.</span>
                        <span>Hollywood, CA</span>
                        <span>I booked a custom getaway to Paris (for myself) at great price and the website even helped me book tours and activities. The customer service was excellent and I was reimbursed for lost luggage!</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col pt-10 px-8 pb-5 bg-4 rounded-sm border-[2px] border-1 drop-shadow-custom-2">
                        <span>Liam S.</span>
                        <span>Hollywood, CA</span>
                        <span>I booked a custom getaway to Paris (for myself) at great price and the website even helped me book tours and activities. The customer service was excellent and I was reimbursed for lost luggage!</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
