// Import React
import React from 'react'
// Import Navbar component
import Navbar from './Navbar'

// Main About component
function About() {
  // Team members data - this could come from a database later
  const teamMembers = [
    {
      name: 'Sri Pavan Tej B',
      role: 'Creative Director',
      description: 'Leading our creative vision with 8+ years in digital design and branding.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759494875/IMG_7173_fuk9wf.jpg'
    },
    {
      name: 'Deepika M',
      role: 'UX Designer',
      description: 'Crafting user experiences that delight and convert with data-driven design.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759729626/deepika_JPG_ylslw4.jpg'
    },
    {
      name: 'Harsha P',
      role: 'Developer',
      description: 'Building scalable solutions with modern technologies and clean code.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759729526/harsha_png_j8dd1t.jpg'
    }
  ]

  // Company values - what we stand for
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
    },
    {
      title: 'Quality',
      description: 'Every project receives meticulous attention to detail and uncompromising quality standards.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality.',
    },
    {
      title: 'Growth',
      description: 'We\'re committed to continuous learning and helping our clients achieve sustainable growth.',
    }
  ]

  // Company statistics - impressive numbers
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '8+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  // Helper function to create a team member card
  const createTeamCard = (member) => {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
        {/* Team member image */}
        <div className="w-64 h-64 rounded-xl mx-auto mb-4 overflow-hidden border-2 border-[#ffd600]/30">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Team member name */}
        <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
        
        {/* Team member role */}
        <p className="text-[#ffd600] font-medium mb-3">{member.role}</p>
        
        {/* Team member description */}
        <p className="text-white/70 text-sm leading-relaxed flex-grow">{member.description}</p>
      </div>
    )
  }

  // Helper function to create a value card
  const createValueCard = (value) => {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
        {/* Value title */}
        <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
        
        {/* Value description */}
        <p className="text-white/70 leading-relaxed flex-grow">{value.description}</p>
      </div>
    )
  }

  // Helper function to create a stat card
  const createStatCard = (stat) => {
    return (
      <div className="text-center">
        {/* Stat number */}
        <div className="text-4xl md:text-5xl font-bold text-[#ffd600] mb-2">{stat.number}</div>
        
        {/* Stat label */}
        <div className="text-white/70 font-medium">{stat.label}</div>
      </div>
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
              ABOUT
            </h1>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-4 py-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-[#ffd600]">Impact</span>
            </h2>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Loop through stats and create stat cards */}
              {stats.map((stat, index) => (
                <div key={index}>
                  {createStatCard(stat)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="about" className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-[#ffd600]">Story</span>
            </h2>
            
            {/* Story content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Story text */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Founded on Passion</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Editco.Media was born from a simple belief: every business deserves exceptional digital experiences. 
                  What started as a small team of passionate creators has grown into a full-service digital agency 
                  that transforms ideas into reality.
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  We specialize in creating compelling visual content, building robust web solutions, and developing 
                  AI-powered tools that help businesses thrive in the digital landscape. Our approach combines 
                  creative excellence with technical expertise to deliver results that exceed expectations.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Today, we're proud to work with businesses of all sizes, from startups to established enterprises, 
                  helping them navigate the ever-evolving digital world with confidence and creativity.
                </p>
              </div>
              
              {/* Story image placeholder */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                {/* Editco.Media Logo */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://res.cloudinary.com/dqataciy5/image/upload/v1759494272/29292A_shade_editco_logo_tojjqu.png"
                    alt="Editco.Media Logo"
                    className="h-60 w-auto mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Editco.Media</h4>
                <p className="text-white/70">Where imagination meets innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-[#ffd600]">Values</span>
            </h2>
            
            {/* Values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Loop through values and create value cards */}
              {values.map((value, index) => (
                <div key={index}>
                  {createValueCard(value)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Meet Our <span className="text-[#ffd600]">Team</span>
            </h2>
            
            {/* Team grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Loop through team members and create team cards */}
              {teamMembers.map((member, index) => (
                <div key={index}>
                  {createTeamCard(member)}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
