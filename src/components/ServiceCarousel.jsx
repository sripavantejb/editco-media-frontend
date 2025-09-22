import React from 'react';

// You can move this data to an external file or fetch it from an API
const servicesData = [
  { 
    title: 'Shirt Editing', 
    description: 'Design enhancements and retouching for clothing products.' 
  },
  { 
    title: 'Thumbnail Editing', 
    description: 'Attention-grabbing thumbnails optimized for YouTube, Instagram, and short-form content.' 
  },
  { 
    title: 'Reel Editing', 
    description: 'Trend-based editing for Instagram/TikTok reels with transitions, motion effects, captions, and music sync.' 
  },
  { 
    title: 'T-Shirt Mockups', 
    description: 'High-quality mockups for merchandise presentation and client approvals.' 
  },
  { 
    title: 'AI Chatbots', 
    description: 'Customized AI chatbot solutions for websites and social platforms to automate customer service.' 
  },
  { 
    title: 'AI Websites', 
    description: 'Lightweight websites built using AI and no-code platforms tailored to client needs.' 
  },
  { 
    title: 'Social Media Management', 
    description: 'Content scheduling, caption writing, hashtag strategy, and performance analytics.' 
  },
  { 
    title: 'Digital Marketing', 
    description: 'Campaign design, Meta/Google ads, branding support, and growth strategy.' 
  },
  {
    title: 'Logo & Brand Identity',
    description: 'Creating memorable logos and complete brand style guides for a cohesive visual identity.'
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Optimizing your website and content to rank higher on search engines like Google.'
  },
  {
    title: 'Podcast & Audio Editing',
    description: 'Professional audio cleanup, editing, and mastering for podcasts and voice-overs.'
  },
  {
    title: 'E-commerce Product Editing',
    description: 'Advanced photo retouching for all types of e-commerce products to boost sales.'
  }
];
const ServiceCarousel = () => {
  // State to track the currently active card index. Start in the middle.
  const [activeIndex, setActiveIndex] = React.useState(Math.floor(servicesData.length / 2));

  // Refs to hold the container and card elements for scrolling
  const containerRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  // Ref to hold the interval ID for cleanup
  const intervalRef = React.useRef(null);

  // Function to start or reset the autoplay timer
  const startAutoplay = () => {
    // Clear any existing timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Set a new timer
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // Loop back to the start when the end is reached
        return (prevIndex + 1) % servicesData.length;
      });
    }, 3000); // Change card every 3 seconds
  };

  // Effect to handle scrolling the active card horizontally inside the container only
  React.useEffect(() => {
    const activeCard = cardRefs.current[activeIndex];
    const container = containerRef.current;
    if (!activeCard || !container) return;

    // Compute the horizontal position to center the active card without affecting page scroll
    const activeCardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const targetScrollLeft = activeCardCenter - container.offsetWidth / 2;

    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
  }, [activeIndex]);

  // Effect to initialize and clean up the autoplay timer
  React.useEffect(() => {
    // Disable autoplay on initial load to prevent page from auto-scrolling into view
    // Users can still interact with the carousel manually
    // startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // runs once on mount

  // Handler for when a user clicks a card
  const handleCardClick = (index) => {
    setActiveIndex(index);
    // Reset the autoplay timer so the user has time to view the card
    startAutoplay();
  };

  return (
    <div
      ref={containerRef}
      // Added [perspective:1000px] and scrollbar-hiding classes
      className="flex items-center w-full max-w-7xl overflow-x-auto p-10 [perspective:1000px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {servicesData.map((service, index) => (
        <div
          // Assign a ref to each card element
          ref={(el) => (cardRefs.current[index] = el)}
          key={service.title}
          onClick={() => handleCardClick(index)}
          // Base styles for all cards, including the precise transition from the original CSS
          className={`
            flex-shrink-0 w-64 h-96 mx-4 bg-[#313131] rounded-2xl shadow-md cursor-pointer 
            flex flex-col justify-center items-center text-center p-5 relative
            transition-all duration-[100ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            ${
              // Conditional classes for the active vs. inactive cards
              activeIndex === index
                ? 'scale-110 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-10' // Active state
                : 'scale-85 opacity-60 z-0' // Inactive state
            }
          `}
        >
          <h3 className="text-xl font-semibold mb-2 text-[#ffd600]">{service.title}</h3>
          <p className="text-white">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCarousel;