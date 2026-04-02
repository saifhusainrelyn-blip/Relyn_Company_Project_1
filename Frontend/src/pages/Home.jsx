import React from 'react'
import HeroSection from '../components/HomeComponent/HeroSection'
import HeroCardsection from '../components/HomeComponent/Herocard'
import BooknowHomesection from '../components/HomeComponent/BooknowHome'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroCardsection/>
      <BooknowHomesection/>
    </div>
  )
}

export default Home