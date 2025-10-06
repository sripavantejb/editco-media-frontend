// Import React
import React, { useState, useEffect } from 'react'
// Import Navbar component
import Navbar from './Navbar'

// Main Work component
function Work() {
  // Portfolio projects data from the spreadsheet (custom order)
  const projects = [
    {
      id: 1,
      title: 'Editco.media',
      description: 'Editco.Media is a freelancing startup that blends creativity and technology to empower brands, creators, and businesses. Our website showcases our services with a clean white-and-yellow aesthetic, reflecting innovation and energy. Key offerings include reel editing, thumbnail design, t-shirt mockups, social media management, marketing, and AI-powered websites and chatbots.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759726993/Screenshot_2025-10-06_at_10.33.03_AM_irefyt.png',
      category: 'Web Development',
      technologies: ['React.js', 'MongoDB', 'Node.js'],
      link: '#'
    },
    {
      id: 2,
      title: 'Nike Mobile Design',
      description: 'This is a simple Nike shopping app UI design concept. It includes a login/signup screen, a home page with product categories and most purchased items, and a detailed product page with price, size selection, add-to-cart, and wishlist options.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759316519/Screenshot_2025-10-01_163138_kpr7qj.png',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Mobile Design', 'E-commerce UI'],
      link: 'https://www.figma.com/design/5NbTKMldALdsqo0q64YjZI/project-one?node-id=0-1&p=f&t=HJv5HMGoAJRAVMy1-0'
    },
    {
      id: 3,
      title: 'MakeFit',
      description: 'MakeFit is a smart wardrobe web app that helps users organize their outfits and get AI-powered outfit suggestions. It allows saving items, applying filters, and receiving personalized recommendations.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759333605/Screenshot_2025-10-01_210956_leaoru.png',
      category: 'Web Development',
      technologies: ['AI Integration', 'Web App', 'Personalization'],
      link: 'https://makefit.vercel.app/'
    },
    {
      id: 4,
      title: 'Resuma Genius',
      description: 'ResumaGenius is an AI-powered resume analysis tool that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS). The application provides instant scoring and feedback on resume compatibility with modern ATS software used by employers.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759681045/Screenshot_2025-10-05_at_9.47.18_PM_goidyl.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Gemini AI'],
      link: 'https://resuma-genius.vercel.app/'
    },
    {
      id: 5,
      title: 'Veda AI Sahayak',
      description: 'AI Crop Doctor is a smart platform that helps farmers identify plant diseases quickly and get the right solutions. By uploading a photo of a leaf or crop, the system uses artificial intelligence to detect the problem, show the disease name, and suggest treatment methods. A Telugu voice-based web app that detects crop diseases, gives solutions, and guides farmers using AI.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759729934/Screenshot_2025-10-06_at_11.22.05_AM_g3bvsd.png',
      category: 'Web Development',
      technologies: ['AI Integration', 'Voice Recognition', 'Machine Learning'],
      link: 'https://masscoders123x.netlify.app/'
    },
    {
      id: 6,
      title: 'Indian Kitchen',
      description: 'Indian Kitchen is a MERN stack web application that brings authentic Indian recipes to a digital platform. Users can browse, search, and filter recipes by ingredients or cuisine type, manage their profiles, save favorites, and access personalized recommendations.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759495957/Screenshot_2025-10-03_at_6.22.30_PM_khb1e1.png',
      category: 'Web Development',
      technologies: ['MERN Stack', 'Recipe Management', 'User Authentication'],
      link: 'https://indian-kitchen.vercel.app/'
    },
    {
      id: 7,
      title: 'Job Link',
      description: 'Built using the MERN stack, JobLink is a platform designed to connect job seekers with recruiters in a seamless way. It enables users to create profiles, apply for jobs, and track applications, while employers can post openings and manage applicants efficiently.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759495845/Screenshot_2025-10-03_at_6.20.38_PM_r1xt5o.png',
      category: 'Web Development',
      technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: 'https://job-web-application-boc9.vercel.app/'
    },
    {
      id: 8,
      title: 'Skills 2025 Thumbnail',
      description: 'YouTube thumbnail design for educational content about essential skills for 2025, designed to maximize engagement and click-through rates.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759317499/BEST_SKILL_FOR_2025_4_okkqts.png',
      category: 'Branding',
      technologies: ['YouTube Design', 'Educational Content', 'Visual Marketing'],
      link: '#'
    },
    {
      id: 9,
      title: 'ISKCON Branding',
      description: 'Brand identity and visual design work for ISKCON organization, creating cohesive branding materials and visual assets.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759317430/ISKCON_bhqic6.png',
      category: 'Branding',
      technologies: ['Brand Identity', 'Visual Design', 'Adobe Creative Suite'],
      link: '#'
    },
    {
      id: 10,
      title: 'YouTube Thumbnail Design',
      description: 'Professional YouTube thumbnail designs created for various channels, focusing on high click-through rates and engaging visual elements.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759318124/hvs_jzr1py.png',
      category: 'Branding',
      technologies: ['Adobe Creative Suite', 'Visual Design', 'YouTube Marketing'],
      link: '#'
    },
    {
      id: 11,
      title: 'Movie Verse',
      description: 'MovieVerse is an interactive web application that allows users to search for movies, explore trending titles, and view detailed information such as ratings, release dates, and plot summaries. Built with HTML, CSS, and JavaScript, it provides a clean, responsive interface that delivers an engaging browsing experience.',
      image: 'https://res.cloudinary.com/dzn5zamaf/image/upload/v1759317012/Screenshot_2025-10-01_163952_p5pdrs.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://hvsmovies.niat.tech/'
    }
  ]

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All')
  
  // State for modal
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Project categories for filtering
  const categories = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'UI/UX Design']

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  // Function to open modal with image
  const openModal = (image, title) => {
    setSelectedImage({ image, title })
    setIsModalOpen(true)
  }

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }

  // Check if project should show modal (All projects now show modal)
  const shouldShowModal = (category) => {
    return true // All projects now show modal popup
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset' // Restore scrolling
    }
  }, [isModalOpen])

  // Helper function to create a project card
  const createProjectCard = (project) => {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
        {/* Project image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#ffd600] text-black px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Project content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Project title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-200">
            {project.title}
          </h3>
          
          {/* Project description */}
          <p className="text-white/70 leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          
          {/* Technologies used */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* View project buttons */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => openModal(project.image, project.title)}
              className="text-[#ffd600] font-medium hover:text-[#fff9be] transition-colors duration-200 text-left"
            >
              View Image →
            </button>
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="text-white/70 font-medium hover:text-white transition-colors duration-200 text-left text-sm">
                  Visit Live Site →
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Helper function to create a category filter button
  const createCategoryButton = (category, isActive = false) => {
    return (
      <button
        onClick={() => setActiveFilter(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-[#ffd600] text-black'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {category}
      </button>
    )
  }

  // Main component return (what gets displayed on screen)
  return (
    <div className="min-h-screen bg-[#1d1d1f] w-full">
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Main content area - starts below the fixed navbar */}
      <div className="pt-24 bg-[#1d1d1f] w-full">
        
        {/* Hero Section with Large Text */}
        <section className="px-4 py-8 flex flex-col justify-start bg-[#1d1d1f]">
          <div className="flex items-center">
            <h1 className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none">
              WORK
            </h1>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 py-8 bg-[#1d1d1f]">
          <div className="max-w-6xl mx-auto">
            {/* Category filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {/* Loop through categories and create filter buttons */}
              {categories.map((category, index) => (
                <div key={index}>
                  {createCategoryButton(category, activeFilter === category)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="px-4 py-8 bg-[#1d1d1f]">
          <div className="max-w-6xl mx-auto">
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Loop through filtered projects and create project cards */}
              {filteredProjects.map((project) => (
                <div key={project.id}>
                  {createProjectCard(project)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for fullscreen image display */}
        {isModalOpen && selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (X) - Top Right */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-red-500/90 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-200 shadow-lg group"
                title="Close (Press Escape)"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Back button - Top Right */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-20 z-20 bg-white/30 hover:bg-white/40 text-white rounded-lg px-4 py-2 transition-all duration-200 backdrop-blur-sm flex items-center gap-2 group shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </button>
              
              {/* Project title */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
              
              {/* Bottom back button */}
              <button
                onClick={closeModal}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full px-6 py-3 transition-all duration-200 backdrop-blur-sm flex items-center gap-2 group shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Click to Close</span>
              </button>
              
              {/* Fullscreen image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Work
