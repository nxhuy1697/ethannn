"use client";
//image
import Image from "next/image";
//framer motion
import { motion } from "framer-motion";
//components
import Avatar from "@/components/Avatar";
import PraticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtns from "@/components/ProjectsBtns";
//variants
import { fadeIn } from "../../variant";

//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
import AvatarD from "@/components/AvatarD";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-primary/60 h-full">
      {/* text  */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title  */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex absolute bottom-0 -left-[100px]"
          >
            <AvatarD />
          </motion.div>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[35px] font-bold mb-10"
          >
            {t('home.title_part1')} <span className="text-accent">{t('home.title_part2')} </span>
          </motion.h1>

          {/* subtitle  */}

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-[710px] max-auto xl:mx-0 mb-10 xl:mb-16 text-right"
          >
            <p>{t('home.content_line1')} </p>
            <p>{t('home.content_line2')}</p>
  

          </motion.div>

          {/* btn  */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtns />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtns />
          </motion.div>
        </div>
      </div>
      {/* image  */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        {/* bg img  */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* practicle  */}

        <PraticlesContainer />

        {/* avatar img  */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[400px] max-h-[500px] absolute -bottom-32  lg:bottom-[20%] lg:right-[15%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
