"use client"
import React from "react";
//link
import Link from "next/link";


//icons
import { FaLinkedin, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import LanguageChanger from "./LanguageToggle";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaYoutube />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaFacebookSquare />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaSquareXTwitter />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
      <LanguageChanger />

    </div>
  );
};

export default Socials;
