"use client";
//icons
import { HiHome, HiUser } from "react-icons/hi";
import {
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { useState } from 'react'

//Link
import Link from "next/link";

//next router
import { usePathname } from "next/navigation";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

//nav data
export const navData = [
  {
    name: "nav.home",
    path: "/",
    icon: <HiHome />,
  },
  {
    name: "nav.about",
    path: "/about",
    icon: <HiUser />,
  },
  {
    name: "nav.services",
    path: "/services",
    icon: <HiRectangleGroup />,
  },
  {
    name: "nav.work",
    path: "/work",
    icon: <HiViewColumns />,
  },
  {
    name: "nav.testmonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "nav.contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
 
];

const Nav = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const handleChangeLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "vi" : "en")
    i18n.changeLanguage(currentLanguage)
  }
  console.log(currentLanguage)
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      {/* inner  */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              {/* tooltip  */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize "> {t(`${link.name}`)}</div>
                  {/* triangle  */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 "></div>
                </div>
              </div>
              {/* icon  */}
              <div>{link.icon}</div>
            </Link>
            
          );
        })}
      </div>
      <div>

     
      </div>
    </nav>
  );
};

export default Nav;
