// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
          'about': "About",
          'servicesmenu': "Services",
          'contact': "Contact",
          "hero-content": "Digital solutions.",
          "hero-subtext": "Innovative web development tailored for your business needs",

          "services-main-cta": "Services",
          "services-sub-cta": "Explore how we turn ideas into impact.",

          "contact-main-cta" : 'Contact Our Team Now',
          'contact-sub-cta' : 'Our team is here to help you',

          "services.webdev.title": "Web Development",
          "services.webdev.description": "Modern, responsive websites and apps tailored to your unique needs.",
          
          "services.seo.title": "SEO Optimization",
          "services.seo.description": "Better search engine visibility so your clients can easily find you.",
          
          "services.hosting.title": "Domain & Hosting",
          "services.hosting.description": "Support in selecting, managing, and configuring domain and hosting.",
          
          "services.redesign.title": "Website Redesign",
          "services.redesign.description": "Revamping outdated sites with modern design and technology.",
          
          "services.consulting.title": "Training & Consulting",
          "services.consulting.description": "Web training and consulting for both beginners and advanced users.",

          "services.webapp.title": "Web Apps",
          "services.webapp.description": "Custom web applications for businesses and freelancers (e.g., customer review systems, webshop).",

          'contact-btn-text' : 'Contact Us',

          'contact-' : 'Contact The Team',
          'contact-sub' : 'Our team is here to help you',

          'contact-thanks' : 'Thank you for reaching out! Our team will get back to you within 24 hours. We appreciate your patience and look forward to assisting you as soon as possible.',

          'form-title' : 'Get in Touch',
          'form-name' : 'Full Name',
          'form-tel': '+36301234567',
          'form-email' : 'info@gmail.com',
          'form-mess' : 'Your message...',
          'terms' : "I agree to the terms and conditions.",
          'submit' : 'Submit',

          'footer-privacies' : 'Privacy Policy',
          'footer-cookie' : 'Cookie Policy',
          'footer-privacy' : 'Data Protection',

          'footer-mail' : 'elementworkseu@gmail.com',
          'footer-phone' : '+36305771066',
          'footer-hosting' : 'Hosting Provider',
          'footer-hosting-name' : 'Name: Hostinger',
          'footer-hosting-website' : 'Hostinger Website',
          
          
        }
      },

      hu: {
        translation: {
          'about': "Rólunk",
          'servicesmenu': "Szolgáltatások",
          'contact': "Kapcsolat",
          "hero-content": "Digitális megoldások.",
          "hero-subtext": "Innovatív webfejlesztés az Ön üzleti igényeire szabva",

          "services-main-cta": "Szolgáltatások",
          "services-sub-cta": "Nézd meg, hogyan válik egy ötlet eredménnyé.",

          "contact-main-cta" : 'Keresse fel csapatunkat',
          'contact-sub-cta' : 'Csapatunk itt van, hogy segítsen  Önnek',

          "services.webdev.title": "Webfejlesztés",
          "services.webdev.description": "Modern, reszponzív weboldalak és alkalmazások készítése egyedi igényekre.",
          
          "services.seo.title": "SEO optimalizálás",
          "services.seo.description": "Jobb keresőmotoros láthatóság, hogy ügyfeleid könnyen megtaláljanak.",
          
          "services.hosting.title": "Domain & Tárhely",
          "services.hosting.description": "Segítség domain és tárhely választásban, kezelésben és beállításban.",
          
          "services.redesign.title": "Weboldal felújítás",
          "services.redesign.description": "Elavult oldalak frissítése modern dizájnnal és technológiával.",
          
          "services.consulting.title": "Oktatás & Tanácsadás",
          "services.consulting.description": "Webes képzések és konzultációk kezdőknek és haladóknak egyaránt.",
          
          "services.webapp.title": "Webalkalmazások",
          "services.webapp.description": "Egyedi webalkalmazások fejlesztés, cégek és EV-k számára. (pl: vevői review rendszer, webshop)",

          'contact-btn-text' : 'Kapcsolatfelvétel',

          'contact-' : 'Kapcsolatfelvétel',
          'contact-sub' : 'Csapatunk itt van, hogy segítsen Önnek',

          'contact-thanks' : 'Köszönjük, hogy kapcsolatba lépett velünk! Kollégáink 24 órán belül válaszolnak. Köszönjük türelmét, igyekszünk minél hamarabb segíteni.',

          'form-title' : 'Lépjen kapcsolatba velünk',
          'form-name' : 'Név',
          'form-tel': '+36301234567',
          'form-email' : 'info@gmail.com',
          'form-mess' : 'Egyéb megjegyzés...',
          'terms' : "Elfogadom a felhasználási feltételeket és az adatvédelmi irányelveket.",
          'submit' : 'Küldés',

          'footer-privacies' : 'Adatvédelem',
          'footer-cookie' : 'Cookie tájékoztató',
          'footer-privacy' : 'Adatvédelmi tájékoztató',

          'footer-mail' : 'elementworkseu@gmail.com',
          'footer-phone' : '+36305771066',

          'footer-hosting' : 'Tárhelyszolgáltató',
          'footer-hosting-name' : 'Név: Hostinger',
          'footer-hosting-website' : 'Hostinger weboldal',
        }
      },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'hu',
        fallbackLng: 'hu',
        debug: false, // Set to true for development to see console logs
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;