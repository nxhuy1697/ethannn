"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

type Locale = "en" | "vi";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (locale: Locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <button 
        onClick={() => handleLanguageChange("vi")}
      >
        <Icon icon="flagpack:vn" height={15} className="rounded-sm" />
      </button>
      <button onClick={() => handleLanguageChange("en")}>
      <Icon icon="flagpack:gb-ukm"height={15} className="rounded-sm" />
      </button>
    </div>
  );
};

export default LanguageToggle;
