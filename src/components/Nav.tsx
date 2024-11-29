"use client";
//icons
import { HiHome } from "react-icons/hi";
import {
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { IoMdInformationCircle } from "react-icons/io";
import { MdWork } from "react-icons/md";

//Link
import Link from "next/link";

//next router
import { usePathname } from "next/navigation";
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

//tooltip
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    icon: <IoMdInformationCircle />,
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
    name: "nav.recruit",
    path: "/recruit",
    icon: <MdWork />,
  },
  {
    name: "nav.contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <TooltipProvider delayDuration={100}>
      <nav className="flex flex-col items-center xl:justify-center fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
        {/* inner  */}
        <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
          {navData.map((link, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger>
                  <Link
                    key={index}
                    href={link.path}
                    className={`${
                      link.path === pathname && "text-accent"
                    } relative flex items-center group hover:text-accent transition-all duration-300`}
                  >
                    {/* icon  */}
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  sideOffset={8}
                  className="z-50 bg-white text-primary text-[12px] font-semibold capitalize py-[2px] hidden xl:block  rounded-md shadow-md dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
                >
                  {t(`${link.name}`)}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Nav;
