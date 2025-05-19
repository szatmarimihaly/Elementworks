import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {

    const { t, i18n } = useTranslation();

  return (
    <div className='bg-zinc-900/80 text-white rounded-t-lg mx-0 lg:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 p-6 lg:p-10 items-center justify-evenly mt-20'>
        
        <div className='footer-item'>
            <img src="./no_bg2.webp" alt="Elementworks Logo" className='w-60'/>
            <p>{t('hero-content')}</p>
        </div>

        <div className='footer-item'>
            <ul className='footer-list'>
                <li><p className='footer-title'>{t('footer-privacies')}</p></li>
                <li><Link to="/cookie">{t('footer-cookie')}</Link></li>
                <li><Link to="/cookie">{t('footer-privacy')}</Link></li>
            </ul>
        </div>

        <div className='footer-item'>
            <ul className='footer-list'>
                <li><p className='footer-title'>{t('contact')}</p></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=elementworkseu@gmail.com" target='_blank' rel='noopener noreferrer'>
                <button className='cursor-pointer'>{t('footer-mail')}</button></a>
                </li>
                <li><a href="tel:+36305771066">{t('footer-phone')}</a></li>
            </ul>
        </div>

        <div className='footer-item'>
            <ul className='footer-list'>
                <li><p className='footer-title'>{t('footer-hosting')}</p></li>
                <li><p>{t('footer-hosting-name')}</p></li>
                <li><a href="https://www.hostinger.com" target='_blank' rel='noopener noreferrer'>
                <button className='cursor-pointer'>{t('footer-hosting-website')}</button></a>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer