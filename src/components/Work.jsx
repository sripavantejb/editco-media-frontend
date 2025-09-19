// Import React
import React from 'react'
// Import Navbar component
import Navbar from './Navbar'

// Main Work component
function Work() {
  // Portfolio projects data - this could come from a database later
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with AI-powered recommendations and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      category: 'Branding',
      technologies: ['Adobe Creative Suite', 'Brand Strategy', 'Visual Design'],
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Multi-platform social media campaign that increased engagement by 300% and followers by 150%.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Digital Marketing',
      technologies: ['Social Media', 'Content Creation', 'Analytics'],
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile App Design',
      description: 'User-centered mobile app design with intuitive navigation and modern UI/UX principles.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      link: '#'
    },
    {
      id: 5,
      title: 'AI Chatbot Development',
      description: 'Custom AI chatbot solution that reduced customer service response time by 80%.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'AI Solutions',
      technologies: ['Machine Learning', 'Natural Language Processing', 'API Integration'],
      link: '#'
    },
    {
      id: 6,
      title: 'Video Production',
      description: 'Professional video production including editing, motion graphics, and post-production.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2c4b4571?w=600&h=400&fit=crop',
      category: 'Content Creation',
      technologies: ['Video Editing', 'Motion Graphics', 'Post-Production'],
      link: '#'
    }
  ]

  // Project categories for filtering
  const categories = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'UI/UX Design', 'AI Solutions', 'Content Creation']

  // Helper function to create a project card
  const createProjectCard = (project) => {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
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
        <div className="p-6">
          {/* Project title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-200">
            {project.title}
          </h3>
          
          {/* Project description */}
          <p className="text-white/70 leading-relaxed mb-4">
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
          
          {/* View project button */}
          <a href={project.link}>
            <button className="text-[#ffd600] font-medium hover:text-[#fff9be] transition-colors duration-200">
              View Project →
            </button>
          </a>
        </div>
      </div>
    )
  }

  // Helper function to create a category filter button
  const createCategoryButton = (category, isActive = false) => {
    return (
      <button
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
    <div className="min-h-screen bg-[#1d1d1f]">
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Main content area - starts below the fixed navbar */}
      <div className="pt-24">
        
        {/* Hero Section with Large Text */}
        <section className="px-4 py-8 flex flex-col justify-start">
          <div className="flex items-center">
            <h1 className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none">
              WORK
            </h1>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Category filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {/* Loop through categories and create filter buttons */}
              {categories.map((category, index) => (
                <div key={index}>
                  {createCategoryButton(category, index === 0)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Loop through projects and create project cards */}
              {projects.map((project) => (
                <div key={project.id}>
                  {createProjectCard(project)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA content */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your <span className="text-[#ffd600]">Project</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Let's work together to create something amazing. We're here to help bring your vision to life.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Connect button */}
              <a href="/connect">
                <button className="relative inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-xl overflow-hidden group">
                  {/* Button background gradient */}
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  
                  {/* Button content */}
                  <span className="relative z-10 text-lg font-medium">Start a Project</span>
                </button>
              </a>
              
              {/* About button */}
              <a href="/about">
                <button className="relative inline-flex items-center justify-center px-8 py-4 text-white border border-white/20 rounded-xl overflow-hidden group bg-transparent">
                  {/* Button background gradient */}
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  
                  {/* Button content */}
                  <span className="relative z-10 text-lg font-medium">Learn More</span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work
