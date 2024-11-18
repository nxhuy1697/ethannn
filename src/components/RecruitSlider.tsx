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
import { FaQuoteLeft } from "react-icons/fa";
//import required modules
import {Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ScrollArea } from './ui/scroll-area';
// testimonial data
const recruitSlider = [
  {
    image: '/internship.jpg',
    name: 'recruit.intern',
    message:'recruit.intern_text'
  },
  {
    image: '/development.png',
    name: 'recruit.dev',
    message: 'recruit.dev_text'
  },
  {
    image: '/code.png',
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
    modules={[Navigation, Pagination]}
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
                <div className='mb-2 mx-auto bg-white rounded-full'>
                  <Image src={items.image} width={150} height={150} alt='' className='rounded-full' />
                </div>
                {/* name  */}
                <div className='text-lg'>{t(`${items.name}`)}</div>
              
              </div>
            </div>
            {/* quote & message */}
            <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[250px] relative xl:pl-20 xl:py-4'>
              {/* quote icon  */}
              <div className='mb-2'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* message  */}
              <ScrollArea className='h-20'>
              <p className='max-w-[600px] xl:text-lg text-center md:text-left'>{t(`${items.message}`)} </p>

              </ScrollArea>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}

export default RecruitSlider