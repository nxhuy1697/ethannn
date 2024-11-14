"use client"
import NewsCard from '@/components/NewsCard'
import React from 'react'
//translation
import "@/utils/i18n";
import { useTranslation } from "react-i18next";

function Details() {
    const {t} = useTranslation()
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
        <div className='container mx-auto xl:w-[737px]'>
            <h2 className='h2'>{t('details.title')} <span className='text-accent'>.</span></h2>
            <NewsCard/>
        </div>
    </div>
  )
}

export default Details