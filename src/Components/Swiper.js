import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Pagination, Scrollbar, Ally, Autoplay} from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Swipers = () => {
    return (
        <div className='relative z-10'>
            <Swiper
                modules={[Navigation, Scrollbar, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide><img src="Images/transaction.jpg" alt="" className="md:h-[50vh] md:w-[100%] object-cover" /> </SwiperSlide>
                <SwiperSlide><img src="Images/tran 3.jpg" alt="" className="md:h-[50vh] md:w-[100%] object-cover" /> </SwiperSlide>
                <SwiperSlide><img src="Images/swift.jpg" alt="" className="md:h-[50vh] md:w-[100%] object-cover" /> </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default Swipers;