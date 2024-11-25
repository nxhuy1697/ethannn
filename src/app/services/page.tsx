"use client";
//components
import Blub from "@/components/Blub";
import ServiceSlider from "@/components/ServiceSlider";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              {t("services.title")} <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 "
            >
              {t("services.parah")}
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider  */}
            <ServiceSlider />
          </motion.div>
        </div>
            {/* image  */}
            <div className="xl:w-[1200px] h-full absolute right-0 bottom-0 ">
          {/* bg img  */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        </div>
      </div>
      <Blub />
    </div>
  );
};

export default Services;
