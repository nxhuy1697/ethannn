"use client";
import React, { useState } from "react";

import Image from "next/image";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

import { FaStar } from "react-icons/fa";

//counter
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "strat",
    info: [
      {
        text: "about.para_first",
        img: "/strat.png",
      },
    ],
  },
  {
    title: "solution",
    info: [
      {
        text: "about.para_second",
        img: "/solutions.png",
      },
    ],
  },
  {
    title: "tech",
    info: [
      {
        text: "about.para_third",
        img: "/techs.png",
      },
    ],
  },
  {
    title: "exp",
    info: [
      {
        text: "about.para_fourth",
        img: "/experiences.png",
      },
    ],
  },
];

//components
import Avatar from "@/components/Avatar";

//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* avatar img  */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      {/* about data  */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* content  */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-bold mt-5 xl:mb-5 xl:mt-0"
          >
            {t("about.title_part1")}{" "}
            <span className="text-accent"> {t("about.title_part2")} </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 md:mb-[45px] xl:mb-12 px-2 xl:px-0 text-[15px] xl:text[24px]"
          >
            {t("about.content")}
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden sm:flex sm:flex-col sm:w-full xl:max-w-none mx-auto xl:mx-0 mb-8 xl:flex-col"
          >
            <p className=" text-white font-bold text-[35px] uppercase sm:text-[28px]">
              {t("about.outstanding")}
            </p>
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="sm:flex sm:justify-center text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                  <FaStar className="inline-block  md:mt-1  md:ml-2 xl:mt-0" />
                </div>
                <div className="sm:ml-2 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  3D Laser
                </div>
              </div>
              {/* clients  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="sm:flex sm:justify-center text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                  <FaStar className="inline-block md:mt-1  md:ml-2 xl:mt-0" />
                </div>
                <div className="sm:ml-2 text-xs uppercase  leading-[1.4] max-w-[100px] ">
                  PHOTOGRAMMETRY
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="sm:flex sm:justify-center text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                  <FaStar className="inline-block md:mt-1  md:ml-2 xl:mt-0" />
                </div>
                <div className="sm:ml-2 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  BIM/GIS/IOT
                </div>
              </div>
              {/* award  */}
              <div className="relative flex-1">
                <div className="sm:flex sm:justify-center text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                  <FaStar className="inline-block md:mt-1  md:ml-2 xl:mt-0" />
                </div>
                <div className="sm:ml-2 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Digital Twin
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info  */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[450px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`cursor-pointer  capitalize text-[14px] xl:text-lg relative ${
                    index === itemIndex
                      ? "text-accent after:w-[100%] after:bg-accent"
                      : ""
                  } after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                    index === itemIndex
                      ? "after:transition-all after:duration-300"
                      : ""
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {t(`about.${item.title}`)}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:h-[100px]">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* img  */}
                  <Image
                    src={item.img}
                    alt=""
                    width={60}
                    height={60}
                    className="mr-2 hidden xl:block"
                  />
                  {/* title  */}
                  <div className="font-light mb-2 md:mb-0 md:mx-[30px] xl:mx-0 text-[15px] px-2">
                    {t(`${item.text}`)}{" "}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden xl:block text-white font-bold uppercase text-right xl:pt-[120px]">
            {t("about.cde-solution")}{" "}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:h-full max-w-[400px] max-h-[500px] absolute xl:-bottom-[25%] right-0 "
        >
          <div className="hidden xl:flex xl:max-w-none xl:w-[300px] xl:[678px]">
            <Image
              src={"/bimnext-logo.png"}
              width={100}
              height={200}
              alt=""
              className="translate-z-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
