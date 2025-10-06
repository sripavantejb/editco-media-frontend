import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-[#1d1d1f] py-4 px-6">
      <div className="text-white">
        <a href="/" className="block">
          <img
            src="https://res.cloudinary.com/dqataciy5/image/upload/v1758274781/Gemini_Generated_Image_87j6z987j6z987j6_kuuycd.jpg"
            alt="editco.media logo"
            className="h-10 md:h-12 w-auto object-contain rounded hover:opacity-80 transition-opacity duration-200"
          />
        </a>
      </div>
      <div className="relative flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          <a href="/services" className="text-white hover:text-[#ffc800f3] transition-colors duration-200 text-lg font-normal">Services</a>
          <a href="/work" className="text-white hover:text-[#ffd600] transition-colors duration-200 text-lg font-normal">Work</a>
          <a href="/about" className="text-white hover:text-[#ffd600] transition-colors duration-200 text-lg font-normal">About</a>
          {/* <a href="/blogs" className="text-white hover:text-[#ffd600] transition-colors duration-200 text-lg font-normal">Blog</a> */}
        </div>
        <div className="flex items-center gap-4">
          {/* Admin Login Button */}
          <a href="/admin-login">
            <button
              className="relative flex items-center justify-center w-24 h-10 rounded-full text-[14px] font-inherit border border-white/20 overflow-hidden z-[1] group bg-transparent text-white hover:text-black transition-colors duration-200"
            >
              <span
                className="absolute top-0 left-0 h-full w-0 rounded-full bg-gradient-to-r from-[#fff9be] to-[#ffd600] transition-all duration-500 ease-in-out z-[-1] group-hover:w-full"
              ></span>
              Admin
            </button>
          </a>
          
          {/* Connect Button */}
          <a href="/connect">
            <button
              className="relative flex items-center justify-center w-32 h-10 rounded-full text-[14px] font-inherit border border-white/10 overflow-hidden z-[1] group bg-[#ffd600]"
            >
              <span
                className="absolute top-0 left-0 h-full w-0 rounded-full bg-gradient-to-r from-[#fff9be] to-[#ffd600] transition-all duration-500 ease-in-out z-[-1] group-hover:w-full"
              ></span>
              Connect
            </button>
          </a>
        </div>
        
        {/* Hamburger */}
        <button
          className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 border border-white/15 rounded-lg text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-5 bg-white transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}></span>
          <span className={`block h-[2px] w-5 bg-white my-[5px] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-[2px] w-5 bg-white transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
        </button>
        {open && (
          <div className="md:hidden absolute right-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-[#1d1d1f]/95 backdrop-blur-sm shadow-lg">
            <div className="py-2">
              <a href="/services" className="block px-4 py-2 text-white hover:text-[#ffd600]">Services</a>
              <a href="/work" className="block px-4 py-2 text-white hover:text-[#ffd600]">Work</a>
              <a href="/about" className="block px-4 py-2 text-white hover:text-[#ffd600]">About</a>
              {/* <a href="/blogs" className="block px-4 py-2 text-white hover:text-[#ffd600]">Blog</a> */}
              <div className="border-t border-white/10 my-2"></div>
              <a href="/admin-login" className="block px-4 py-2 text-white hover:text-[#ffd600]">Admin</a>
              <a href="/connect" className="block px-4 py-2 text-white hover:text-[#ffd600]">Connect</a>
            </div>
          </div>
        )}
      </div>

    </nav>
  )
}



export default Navbar;