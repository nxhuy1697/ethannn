"use client";
import React, { useState } from "react";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//counter
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "strat",
    info: [
      {
        text: "about.para_first",
    
      },
    ],
  },
  {
    title: "solution",
    info: [
      {
        text: "about.para_second",
      },
    ],
  },
  {
    title: "tech",
    info: [
      {
        text: "about.para_third",
      },

    ],
  },
  {
    title: "exp",
    info: [
      {
        text: "about.para_fourth",
      },
    ],
  },
];

//components
import Avatar from "@/components/Avatar";

//translation
import "@/utils/i18n";
import {useTranslation } from "react-i18next";

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
        className="hidden xl:flex absolute bottom-0 -left-[270px]"
      >
        <Avatar />
      </motion.div>
      {/* about data  */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text  */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t('about.title_part1')} <span className="text-accent"> {t('about.title_part2')} </span> 
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
          {t('about.content')}
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 xl:flex-col"
          >
            <p className="text-white font-bold text-[35px]">CÔNG NGHỆ NỔI BẬT</p>
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  3D Laser
                </div>
              </div>
              {/* clients  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                PHOTOGRAMMETRY
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                BIM/GIS/IOT 
                </div>
              </div>
              {/* award  */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
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
                  className={`cursor-pointer capitalize xl:text-lg relative ${
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title  */}
                  <div className="font-light mb-2 md:mb-0">{t(`${item.text}`)} </div>

                  
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
