import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import Navbar from './Navbar';
import BlurText from './BlurText';

function Services() {
  return (
    <div id="services" className="bg-black min-h-screen px-4 py-8 flex flex-col justify-start">
      <div className="h-16">
        <Navbar />
        </div>
      <div className="flex items-center">
        <BlurText
          text="SERVICES"
          className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none"
          animateBy="words"
          direction="top"
          delay={200}
          stepDuration={0.5}
        />
      </div>
        <div className='mt-10'>
          <ServiceCarousel />
        </div>
    </div>
  );
}

export default Services;

