"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({
    children,
  }: Readonly<{ children: React.ReactNode }>) => {
    const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
        <motion.div key={pathname} className='h-full' >
            
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition