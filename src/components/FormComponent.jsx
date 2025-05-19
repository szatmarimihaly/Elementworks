import React from 'react'
import { useTranslation } from 'react-i18next';
import SendIcon from '@mui/icons-material/Send';

const FormComponent = () => {

  const { t, i18n } = useTranslation();

  return (
    <form action="https://formspree.io/f/xeoazzoj" method="POST" className='form'>
      <h2 className='text-xl lg:text-3xl text-center mb-2 lg:mb-4 mt-2'>{t('form-title')}</h2>
      <input type="text" name='Name:' className='input' placeholder={t('form-name')} required/>
      <input type="email" name='Email:' className='input' placeholder={t('form-email')} required/>
      <input type="tel" name='Phone:' className='input' placeholder={t('form-tel')} required/>
      <textarea name="Comment:" id="" rows={4} className='textarea' placeholder={t('form-mess')}></textarea>
      <div className='flex items-center gap-2'>
        <input type="checkbox" className='accent-zinc-900/80 text-sm' required/>
        <p>{t('terms')}</p>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <button type='submit' className='submit'>{t('submit')}<SendIcon fontSize='small'/></button>
      </div>
    </form>
  )
}

export default FormComponent