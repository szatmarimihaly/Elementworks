import React from 'react'
import { useTranslation } from 'react-i18next'
import FormComponent from '../components/FormComponent'

const Contact = () => {

    const { t, i18n } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-between mx-4'>
      <div className='mt-20 text-center'>
        <h1 className='text-6xl md:text-7xl lg:text-7xl text-white-50 font-bold'>{t('contact-main-cta')}</h1>
        
        <div className="mx-auto pointer-events-none mt-6 h-1 w-80 md:w-140 lg:w-170 bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />

        <p className="mt-6 mb-16 text-gray-300 text-xs md:text-lg lg:text-xl max-w-xl mx-auto">
          {t('contact-sub-cta', 'Innovative web development tailored for your business needs.')}
        </p>
      </div>
      <FormComponent />
    </div>
  )
}

export default Contact