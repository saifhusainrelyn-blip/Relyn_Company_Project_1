import React from 'react'
import HeroSection from '../components/HomeComponent/HeroSection'
import HeroCardsection from '../components/HomeComponent/Herocard'
import BooknowHomesection from '../components/HomeComponent/BooknowHome'
import Homecountersection from '../components/HomeComponent/Homecounter'
import HomeTestimonial from '../components/HomeComponent/HomeTestimonial'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroCardsection/>
      <BooknowHomesection/>
      <Homecountersection className="py-16 md:py-24"/>
      <HomeTestimonial/>
    </div>
  )
}

export default Home