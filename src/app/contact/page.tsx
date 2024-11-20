"use client";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";

// component
import Circles from "@/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto pt-[50px] text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form  */}
        <div className="flex flex-col w-full max-w-[700px]  ">
          {/* text  */}

          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white font-bold text-3xl text-center mb-4"
          >
            {t('contact.title_part1')} <span className="text-accent">{t('contact.title_part2')}</span>
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white text-2xl text-center text-[18px] mb-8"
          >
            {t('contact.address')} 
          </motion.p>

          {/* form  */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto "
          >
            {/* input group  */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder={t("contact.form_name")}
                className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <input type="text" placeholder="email" className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <input
              type="text"
              placeholder={t("contact.form_subject")}
              className="input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />

            <textarea
              placeholder={t("contact.form_mess")}
              className="textarea border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            ></textarea>

            <button className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                {t('contact.form_send')}
              </span>

              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
