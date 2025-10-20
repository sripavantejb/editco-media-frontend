// Import React
import React, { useState, useEffect, useRef } from 'react'
// Import Navbar component
import Navbar from './Navbar'
import BlurText from './BlurText'
import TeamMemberPopup from './TeamMemberPopup'

// Main About component
function About() {
  // State for popup
  const [selectedMember, setSelectedMember] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // State for scroll animations
  const [visibleValues, setVisibleValues] = useState(new Set());
  const valueRefs = useRef([]);

  // Team members data with detailed information
  const teamMembers = [
    {
      name: 'Sri Pavan Tej B',
      fullName: 'Sri Pavan Tej Balam',
      pronouns: 'He/Him',
      headline: 'President at NIAT | Full Stack Developer | Bridging Tech, Media & Innovation | Content Creator | YouTuber',
      location: 'Hyderabad, Telangana, India',
      connections: '500+',
      followers: '4,810',
      role: 'Creative Director & Co-founder',
      description: 'Leading our creative vision with 8+ years in digital design and branding.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759494875/IMG_7173_fuk9wf.jpg',
      about: 'Innovative Computer Science Enthusiast | Eager Learner & Aspiring Technologist. A student at NXTWAVE Institute of Advanced Technologies, highly enthusiastic about coding and creating innovative solutions, passionate about connecting with fellow tech enthusiasts and industry mentors.',
      technicalSkills: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'TypeScript, JavaScript, HTML, CSS',
        'Python, C++, C',
        'RESTful APIs, Cloudinary Integration',
        'State Management (React Hooks, Context API)',
        'Database Design (MongoDB)',
        'Responsive UI & Mobile-First Design',
        'Graphic Design (Canva)',
        'Video Editing (DaVinci Resolve)'
      ],
      generalSkills: [
        'Web Development',
        'Social Media Marketing',
        'Team Building',
        'Leadership',
        'Content Creation',
        'Branding & Strategy'
      ],
      currentPositions: [
        {
          title: 'Co-founder',
          organization: 'Editco Media',
          duration: 'Jun 2025 – Present (5 mos)',
          description: 'Creative agency co-founder: content, branding, digital strategy, team building.'
        },
        {
          title: 'President',
          organization: 'Media Council NIAT',
          duration: 'Mar 2025 – Present (8 mos)',
          description: 'Leading and amplifying student media activities, team leadership, event management.'
        }
      ],
      education: [
        {
          institution: 'NxtWave Institute of Advanced Technologies (NIAT)',
          program: 'Computer Science, Data Science & ML',
          period: 'Jul 2024 – Jul 2028',
          skills: 'CSS, HTML, +6 skills'
        },
        {
          institution: 'Chaitanya Deemed to be University',
          program: 'BTech in Computer Science',
          period: 'Aug 2024 – Aug 2028',
          skills: 'C (Programming)'
        }
      ],
      projects: [
        {
          name: 'Editco Media – Creative Agency Management Platform',
          date: 'Oct 2025',
          techStack: 'MERN (MongoDB, Express.js, React, Node.js)',
          description: 'Built a web app with an Admin Panel for client, service, and project management, authentication, efficient state handling, and cloud deployment.'
        },
        {
          name: 'Ukusa Cafe – Real-Time MERN Stack Website',
          date: 'Oct 2025',
          techStack: 'MERN, Tailwind CSS, Cloudinary, Vercel',
          description: 'Modern, mobile-responsive, real-time features, admin dashboard, gallery, and wishlist.'
        }
      ],
      linkedin: 'https://linkedin.com/in/sripavantejbalam',
      instagram: 'https://www.instagram.com/yours.tej/',
      youtube: 'https://www.youtube.com/@thedevkidd'
    },
    {
      name: 'Deepika M',
      fullName: 'Deepika Mundla',
      pronouns: 'She/Her',
      headline: 'Backend Intern @ NxtWave | Full Stack Developer | AI & Automation Enthusiast',
      location: 'Greater Hyderabad Area',
      connections: '500+',
      followers: '809',
      role: 'UX Designer & Backend Developer',
      description: 'Crafting user experiences that delight and convert with data-driven design.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759729626/deepika_JPG_ylslw4.jpg',
      about: 'A Computer Science student at NIAT, passionate about problem-solving, full-stack development, and intelligent automation. Deepika is skilled in both frontend and backend (MERN, Django + PostgreSQL). She builds automation workflows with n8n and integrates AI (Google Cloud Vertex AI), with an additional focus on UI/UX using Figma, and social media marketing.',
      technicalSkills: [
        'Python, SQL, Django',
        'Node.js, React, Bootstrap',
        'CSS, HTML',
        'MongoDB, PostgreSQL',
        'REST APIs',
        'n8n Automation',
        'Google Cloud Vertex AI',
        'OpenAI, Gemini AI Studio',
        'Figma, UI/UX Design'
      ],
      generalSkills: [
        'Social Media Marketing',
        'Content Strategy',
        'Automation Engineering',
        'Problem Solving',
        'Team Collaboration'
      ],
      currentPositions: [
        {
          title: 'Backend Intern',
          organization: 'NxtWave',
          duration: 'Jun 2025–Present',
          description: 'Working on Python, SQL, and backend development projects.'
        },
        {
          title: 'Social Media Manager',
          organization: 'Gen AI Club at NIAT',
          duration: 'Dec 2024–Present',
          description: 'Managing online presence, content strategy, analytics, and campaign design.'
        }
      ],
      education: [
        {
          institution: 'NxtWave Institute of Advanced Technologies (NIAT)',
          program: 'Data Science & Machine Learning',
          period: '2024–2028',
          skills: 'Bootstrap, CSS, more'
        },
        {
          institution: 'Birla Institute of Technology and Science, Pilani',
          program: 'BSc, Computer Science',
          period: '2024–2027',
          skills: 'C (Programming Language)'
        }
      ],
      projects: [
        {
          name: 'CoffeeCo',
          date: 'Nov 2024',
          techStack: 'HTML/CSS, Figma',
          description: 'Mood-based coffee experience website — runner up in an NIAT hackathon. User-centric design, dynamic animations.'
        }
      ],
      linkedin: 'https://www.linkedin.com/in/deepika-mundla/',
      instagram: 'https://www.instagram.com/deepikaaam_/'
    },
    {
      name: 'Harsha P',
      fullName: 'Harsha P',
      pronouns: 'He/Him',
      headline: 'Shaping the Future Through Collaboration @ NIAT | Aspiring Developer',
      location: 'Hyderabad, Telangana, India',
      connections: '500+',
      followers: '1,005',
      role: 'Developer & Operations Manager',
      description: 'Building scalable solutions with modern technologies and clean code.',
      image: 'https://res.cloudinary.com/dqataciy5/image/upload/v1759729526/harsha_png_j8dd1t.jpg',
      about: 'Relentless passion for acquiring new skills and putting them into action. Student at NxtWave Institute of Advanced Technologies (NIAT) focused on leveraging technology to solve real-world challenges and elevate user experiences. Familiar with Figma for designing effective user interfaces and blends creativity and technical expertise.',
      technicalSkills: [
        'Python, JavaScript, C++',
        'HTML, CSS',
        'Figma (UI/UX Design)',
        'Web Development',
        'Problem Solving'
      ],
      generalSkills: [
        'Time Management',
        'Communication',
        'Media Strategy',
        'Social Media Management',
        'Event Planning',
        'Team Coordination',
        'Leadership'
      ],
      currentPositions: [
        {
          title: 'Operations Manager',
          organization: 'Media Council NIAT',
          duration: 'Nov 2024–Present',
          description: 'Leads all council activities, manages creative/editorial/technical teams, runs on-ground logistics, and conceptualizes events/social media campaigns.'
        },
        {
          title: 'Events & Webinar Lead',
          organization: 'NIAT Student General Council (NSGC)',
          duration: 'Mar 2025–Present',
          description: 'Organizes college events, workshops, webinars, promotes and executes impactful student experiences.'
        }
      ],
      education: [
        {
          institution: 'NxtWave Institute of Advanced Technologies (NIAT)',
          program: 'Computer Science Program, Data Science and Machine Learning Specialization',
          period: 'Aug 2024',
          skills: 'Computer Science, Data Science, Machine Learning'
        },
        {
          institution: 'Chaitanya Deemed to be University',
          program: 'Bachelor of Technology (BTech), Computer Science',
          period: 'Aug 2024 - Aug 2028',
          skills: 'Computer Science'
        }
      ],
      projects: [
        {
          name: 'AI Crop Doctor',
          date: 'Recent',
          techStack: 'Web Technologies, AI',
          description: 'Voice-based web app (Telugu) for crop disease detection and guidance for farmers, uses AI.'
        },
        {
          name: 'MovieVerse',
          date: 'Recent',
          techStack: 'HTML, CSS, JavaScript',
          description: 'Interactive web app for searching and exploring movies.'
        }
      ],
      linkedin: 'https://www.linkedin.com/in/harsha-polina/',
      instagram: 'https://www.instagram.com/harsha___vs18/'
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
    const handleCardClick = () => {
      setSelectedMember(member);
      setIsPopupOpen(true);
    };

    return (
      <div 
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col cursor-pointer group"
        onClick={handleCardClick}
      >
        {/* Team member image */}
        <div className="w-64 h-64 rounded-xl mx-auto mb-4 overflow-hidden border-2 border-[#ffd600]/30 group-hover:border-[#ffd600]/60 transition-all duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Team member name */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ffd600] transition-colors duration-300">{member.name}</h3>
        
        {/* Team member role */}
        <p className="text-[#ffd600] font-medium mb-3">{member.role}</p>
        
        {/* Team member description */}
        <p className="text-white/70 text-sm leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-300">{member.description}</p>
        
        {/* Click indicator */}
        <div className="mt-4 text-xs text-white/50 group-hover:text-[#ffd600] transition-colors duration-300">
          Click for details →
        </div>
      </div>
    )
  }

  // Intersection Observer for scroll animations (Apple-style) for values
  useEffect(() => {
    const observers = []
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    valueRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add delay based on index for stagger effect
              setTimeout(() => {
                setVisibleValues(prev => new Set([...prev, index]))
              }, index * 150) // 150ms stagger between cards
            } else {
              // Remove from visible set when card leaves viewport to reset animation
              setVisibleValues(prev => {
                const newSet = new Set(prev)
                newSet.delete(index)
                return newSet
              })
            }
          })
        }, options)

        observer.observe(card)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  // Helper function to create a value card
  const createValueCard = (value, index, isVisible) => {
    return (
      <div 
        className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 h-full flex flex-col
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
          }`}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(48px)',
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
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
            <BlurText
              text="ABOUT"
              className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none"
              animateBy="words"
              direction="top"
              delay={200}
              stepDuration={0.5}
            />
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
                <div 
                  key={index}
                  ref={el => valueRefs.current[index] = el}
                >
                  {createValueCard(value, index, visibleValues.has(index))}
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

      {/* Team Member Popup */}
      <TeamMemberPopup
        member={selectedMember}
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setSelectedMember(null);
        }}
      />
    </div>
  )
}

export default About
