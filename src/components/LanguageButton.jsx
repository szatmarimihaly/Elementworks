import React from 'react'
import { useTranslation } from 'react-i18next'


const LanguageButton = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hu' : 'en';
        i18n.changeLanguage(newLang);
    }

    return (
        <button
        className='relative overflow-hidden rounded-lg px-5 py-2.5
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
        text-white font-medium
        border border-zinc-700
        transition-all duration-300 ease-out
        hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800
        hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
        active:scale-[0.98]
        before:absolute before:inset-0
        before:bg-gradient-to-br before:from-white/10 before:to-transparent
        before:opacity-70 before:hover:opacity-90' 
        onClick={changeLanguage}>
            <i className="ri-earth-line"></i> {i18n.language === 'hu' ? 'HU' : 'EN'}
        </button>
    );
}

export default LanguageButton