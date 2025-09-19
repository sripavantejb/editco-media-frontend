import React from 'react'

function HeroText() {
  return (
    <div className="bg-[#1d1d1f] p-9 inset-x-0 bottom-6 z-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl">
        <h1 className="text-[22px] md:text-[28px] lg:text-[30px] leading-[1.3] font-medium text-white">
        <span className='text-[#AAA80F]'> Editco.Media </span> <span className="text-[#63676A]">is a trailblazer in Branding, UX, and Digital Strategy—propelling visionary brands into new dimensions. </span>
        </h1>
        <p className="mt-2 text-[18px] md:text-[20px] text-white/70">
          Modern Brands Across Platforms & Places. <span className="text-white/80">Creating Radical Digital Experiences™.</span>
        </p>
      </div>
      <div className="mt-4 md:mt-0 md:absolute md:right-12 lg:right-16 md:-bottom-2">
        <button className="relative px-6 md:px-7 py-2.5 md:py-3 text-[16px] md:text-[18px] text-white border border-white/30 rounded-xl overflow-hidden pointer-events-auto group hover:text-black">
          <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
          <span className="relative z-10">What we do</span>
        </button>
      </div>
    </div>
  )
}

export default HeroText
