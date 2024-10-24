"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div >
        <motion.div className="h-full" key={pathname}>{children}</motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
