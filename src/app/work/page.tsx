"use client"
//components
import Blub from "@/components/Blub";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

const Work = () => {
  const {t} = useTranslation()
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex sm:mt-[100px] lg:mt-0 xl:w-[30vw] flex-col  xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12 mb-0"
            >
              {t('work.title')} <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" max-w-[400px] mx-auto "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus explicabo amet vel molestiae inventore veniam,
              deserunt accusantium ea atque beatae!
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Blub />
    </div>
  )
}

export default Work