import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
import HeroText from './HeroText'
import Services from './Services'
import About from './About'
import Work from './Work'
// import Blogs from './blogs'
// import ServiceCard from './ServiceCard'
import ServiceCarousel from './ServiceCarousel'
import Footer from './Footer'
import CallButton from './CallButton'


function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <HeroText />
      <Services />
      <Work />
      <About />
      <Footer />
      <CallButton />
    </div>
  )
}

export default Home








