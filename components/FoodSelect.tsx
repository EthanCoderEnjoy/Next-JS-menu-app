"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import food from './FoodSelect.module.css';

export default function FoodSelect() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel,Pagination]}
                className={food.swiper}
            >
                <SwiperSlide className={food['swiper-slide']}>Slide 1</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 2</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 3</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 4</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 5</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 6</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 7</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 8</SwiperSlide>
                <SwiperSlide className={food['swiper-slide']}>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
