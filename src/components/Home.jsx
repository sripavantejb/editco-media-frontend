import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
import HeroText from './HeroText'
import Services from './services'
import About from './about'
import Work from './work'
import Blogs from './blogs'
// import ServiceCard from './ServiceCard'
import ServiceCarousel from './ServiceCarousel'


function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <HeroText />
      <Services />
      <Work />
      <About />
      <Blogs />
    </div>
  )
}

export default Home
