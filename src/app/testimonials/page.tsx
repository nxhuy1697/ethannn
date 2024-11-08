"use client"
import TestimonialSlider from "@/components/TestimonialSlider";
import React from "react";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";


const Testimonials = () => {
  const {t} = useTranslation();
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title  */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          {t('testmonials.title')} <span className="text-accent">.</span>
        </motion.h2>
        {/* slider  */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
