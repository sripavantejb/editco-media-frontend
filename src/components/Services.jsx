import React from 'react';
import Cards from './Cards';

function Services() {
  return (
    <div className="bg-black min-h-screen px-4 py-8 flex flex-col justify-start">
      <div className="flex items-center">
        <h1 className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none">
          SERVICES
        </h1>
      </div>
        <div>
           <Cards/> 
        </div>
    </div>
  );
}

export default Services;

