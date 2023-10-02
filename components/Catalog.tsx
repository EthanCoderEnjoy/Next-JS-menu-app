"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import catalog from './Catalog.module.css';

export default function Catalog() {
    return (
        <>
        
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className={catalog.swiper}
                >
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 1</SwiperSlide>
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 2</SwiperSlide>
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 3</SwiperSlide>
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 4</SwiperSlide>
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 5</SwiperSlide>
                    <SwiperSlide className={catalog['swiper-slide']}>Slide 6</SwiperSlide>
                </Swiper>
        </>
    )
}
