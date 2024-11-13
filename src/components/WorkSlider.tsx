"use client";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//icons
import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
//import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";

// testimonial data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "work.news",
          path: "/thumb1.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb2.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb4.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
      ],
    },
    {
      images: [
        {
          title: "work.news",
          path: "/thumb4.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb1.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb2.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
        {
          title: "work.news",
          path: "/thumb3.jpg",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro, eius accusamus molestiae laboriosam est ipsam voluptatem accusantium modi doloremque.",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const {t} = useTranslation()
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              {slide.images.map((image, imgIndex) => {
                return (    
               <ScrollArea key={imgIndex} className="h-[200px] overflow-y-scroll rounded">
                <div>
                  <img src={image.path} alt="" />
                  <h3 className="text-lg font-semibold">{t(`${image.title}`) } </h3>
                  <p className="text-sm text-gray-400">{image.text} </p>
                </div>
               </ScrollArea>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;


  // {/* overlay gradiant  */}
  // <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
  // {/* title  */}
  // <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-300 ">
  //   <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
  //     {/* title part 1  */}
  //     <div className="delay-100">LIVE</div>
  //     {/* title part 2  */}
  //     <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
  //     {/* icon  */}
  //     <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 " ><BsArrowRight /> </div>
  //   </div>
  // </div>