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
//import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "./ui/scroll-area";

//service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "services.soft_dev",
    description: "services.soft_dev_content",
  },
  {
    icon: <RxPencil2 />,
    title: "services.hard_dev",
    description: "services.hard_dev_content",
  },
  {
    icon: <RxDesktop />,
    title: "R&D",
    description: "services.rnd_content",
  },
  {
    icon: <RxReader />,
    title: "services.implementation",
    description: "services.implementation_content",
  },
  {
    icon: <RxRocket />,
    title: "services.operation",
    description: "services.operation_content",
  },
];

const ServiceSlider = () => {
  const {t} = useTranslation();
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              {/* icon  */}
              <div className="text-4xl text-accent mb-4"> {item.icon} </div>
              {/* title & desc  */}
              <div className="mb-8">
                <div className="mb-2 text-md"> {t(`${item.title}`)} </div>
                <ScrollArea className="h-20">
                <p className="max-w-[350px] leading-normal ">
                  {t(`${item.description}`)}{" "}
                </p>
                </ScrollArea>
               
              </div>
              {/* arrow  */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
