import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HeroSlider from '../components/HeroSlider'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Recent from '../components/Recent'
import Gallery from '../components/Gallery'





const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeroSlider/>
        <Trending />
        <Popular/>
        <Recent/>
        <Gallery/>
        
        
    </div>
  )
}

export default Home