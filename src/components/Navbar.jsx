import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButton from './LanguageButton'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='bg-zinc-900/80 p-4 rounded-2xl'>
      <div className=' flex justify-between items-center'>
        <img src="./no_bg2.webp" alt="Elementworks Logo" className='w-50 md:w-80'/>

        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <i className="ri-close-fill text-xl"></i> : <i className="ri-menu-fill text-xl"></i>}
          </button>
        </div>

        <ul className="hidden lg:flex gap-6 text-lg lg:mr-4 items-center">
          <li><Link to="/about" className="hover:text-gray-400">{t('about')}</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">{t('servicesmenu')}</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">{t('contact')}</Link></li>
          <LanguageButton />
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 text-lg">
          <Link to="/about">{t('about')}</Link>
          <Link to="/services">{t('servicesmenu')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <LanguageButton />
        </div>
      )}

    </div>
  )
}

export default Navbar
