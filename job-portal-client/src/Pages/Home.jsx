import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import RegisterCards from '../components/Home/RegisterCards'
import FeaturedJobs from '../components/Home/FeaturedJobs'
import Testimonials from '../components/Home/Testimonials'
import Statistics from '../components/Home/Statistics'
import FeaturedCities from '../components/Home/FeaturedCities'
import FeaturedCandidates from '../components/Home/FeaturedCandidates'

const Home = () => {
  return (
    <>

      {/* hero section */}
      <HeroSection />
      <RegisterCards />
      <FeaturedJobs/>

      <Testimonials/>
      <Statistics/>
      <FeaturedCities/>
      <FeaturedCandidates/>

      

    </>
  )
}

export default Home