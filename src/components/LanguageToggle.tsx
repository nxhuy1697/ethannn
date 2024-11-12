"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";


type Locale = "en" | "vi";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (locale: Locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <button onClick={() => handleLanguageChange("vi")} aria-label="Vietnamese">
        <Image
          src="/vietnam_flag.png"
          alt="Vietnam Flag"
          width={32}
          height={24}
        />
      </button>
      <button onClick={() => handleLanguageChange("en")} aria-label="English">
        <Image
          src="/us_flag.png"
          alt="US Flag"
          width={32}
          height={30}
        />
      </button>
    </div>
  );
};

export default LanguageToggle;
