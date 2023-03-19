import React from 'react'
import Hero from '../components/Hero'
import HeroSlider from '../components/HeroSlider'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Recent from '../components/Recent'
import Gallery from '../components/Gallery'
import Highlights from '../components/Highlights'





const Home = () => {
  return (
    <div>
       
        <Hero />
        <HeroSlider/>
        <Trending />
        <Popular/>
        <Recent/>
        <Gallery/>
        <Highlights/>
        
        
    </div>
  )
}

export default Home