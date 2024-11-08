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
import { Trans, useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form  */}
        <div className="flex flex-col w-full max-w-[700px]  ">
          {/* text  */}
          <Trans i18nKey="contact_title">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Contact <span className="text-accent">Us.</span>
            </motion.h2>
          </Trans>
          {/* form  */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group  */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder={t('contact_form_name')} className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder={t('contact_form_subject')}  className="input" />
            <textarea placeholder={t('contact_form_mess')}  className="textarea"></textarea>

            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
            <Trans i18nKey="contact_btn">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Send
              </span>
              </Trans>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
