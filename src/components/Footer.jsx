import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
      <footer className="bg-[#1d1d1f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://res.cloudinary.com/dqataciy5/image/upload/v1758274781/Gemini_Generated_Image_87j6z987j6z987j6_kuuycd.jpg"
                  alt="editco.media logo"
                  className="h-14 w-auto object-contain rounded-lg"
                />
                <span className="text-2xl font-bold text-white">
                  Editco.Media
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                We blend creativity and technology to empower brands, creators, and businesses with exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 p-3 rounded-lg hover:bg-white/5"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1DA1F2] transition-all duration-300 p-3 rounded-lg hover:bg-white/5"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/editco.media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 p-3 rounded-lg hover:bg-white/5"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/editco-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0077B5] transition-all duration-300 p-3 rounded-lg hover:bg-white/5"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/services" 
                    className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300 text-sm font-medium block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="/work" 
                    className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300 text-sm font-medium block"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300 text-sm font-medium block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="/connect" 
                    className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300 text-sm font-medium block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-400 text-sm font-medium block">Web Development</span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm font-medium block">UI/UX Design</span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm font-medium block">Branding</span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm font-medium block">Digital Marketing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>
    
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Editco.Media. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffd600] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;