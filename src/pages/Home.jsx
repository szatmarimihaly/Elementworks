import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <div className='flex flex-col'>
      <div className='pt-4 pr-2 pl-2 md:p-6 md:pr-4 md:pl-4'>
        <Navbar />
        <HeroSection />
        <TechStack />
        
      </div>
      <Footer />
    </div>
  )
}

export default Home