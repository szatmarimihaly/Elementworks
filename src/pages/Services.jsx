import React from 'react'
import { useTranslation } from 'react-i18next'
import { servicesData } from '../data/serviceData'
import ServiceCard from '../components/ServiceCard'
import ToContactButton from '../components/ToContactButton'
import { useNavigate } from 'react-router-dom'

const Services = () => {

    const { t, i18n } = useTranslation()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/contact')
    }

  return (
    
    <div className="text-center px-4 py-2">
      <ToContactButton text={t('contact-btn-text')} onClick={handleClick} />
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-10">{t('services-main-cta')}</h1>

      <div className="mx-auto my-6 h-1 w-48 md:w-80 lg:w-130 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

      <h2 className="text-lg text-gray-300 mb-10">{t('services-sub-cta')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mb-10">
      
        {servicesData.map(({ id, key, icon }) => (
          <ServiceCard
            key={id}
            icon={icon}
            title={t(`services.${key}.title`)}
            description={t(`services.${key}.description`)}
          />
        ))}
      </div>
    </div>

  )
}

export default Services