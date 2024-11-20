"use client"
import React from 'react';
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//Translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//icons
import { FaQuoteLeft,FaCode,FaLaptopCode  } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
//import required modules
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ScrollArea } from './ui/scroll-area';
// testimonial data
const recruitSlider = [
  {
    image: <FaIdCard />,
    name: 'recruit.intern',
    message:'recruit.intern_text'
  },
  {
    image: <FaLaptopCode />,
    name: 'recruit.dev',
    message: 'recruit.dev_text'
  },
  {
    image: <FaCode/>,
    name: 'recruit.program',
    message:'recruit.program_text'
  },
];


const RecruitSlider = () => {
  const {t} = useTranslation()
  return (
    <Swiper
    navigation = {true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 3000, // 3 giây tự động chuyển slide
      disableOnInteraction: false, // Tiếp tục autoplay khi người dùng tương tác
    }}
    modules={[Navigation, Pagination, Autoplay]}
    className="h-[400px]"
  >
    {recruitSlider.map((items, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* ava, name, position  */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 '>
              <div className='flex flex-col justify-center items-center'>
                {/* ava  */}
                <div className='mb-2 mx-auto rounded-full text-[100px] text-accent '>
                {items.image}
                </div>
                {/* name  */}
                <div className='text-lg text-accent'>{t(`${items.name}`)}</div>
              
              </div>
            </div>
            {/* quote & message */}
            <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[250px] relative xl:pl-20 xl:py-4'>
             
              {/* message  */}

              <p className='text-white max-w-[600px] xl:text-lg text-center md:text-left'>{t(`${items.message}`)} </p>


            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}

export default RecruitSlider