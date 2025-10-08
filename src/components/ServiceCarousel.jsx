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
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Refs to hold the container and card elements for scrolling
  const containerRef = React.useRef(null);
  const cardRefs = React.useRef([]);


  // Effect to handle scrolling the active card horizontally inside the container only
  React.useEffect(() => {
    // Convert activeIndex to the corresponding index in extendedData
    const extendedIndex = activeIndex + 3; // Add 3 because we have 3 duplicate cards at the beginning
    const activeCard = cardRefs.current[extendedIndex];
    const container = containerRef.current;
    if (!activeCard || !container || isTransitioning) return;

    // Compute the horizontal position to center the active card without affecting page scroll
    const activeCardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const targetScrollLeft = activeCardCenter - container.offsetWidth / 2;

    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
  }, [activeIndex, isTransitioning]);


  // Effect to handle scroll events and update active card with infinite scroll
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isTransitioning) return;

      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;

      // Check if we're in the duplicate cards at the end (last 3 cards)
      const isInEndDuplicates = scrollLeft + containerWidth >= scrollWidth - 200;
      
      // Check if we're in the duplicate cards at the beginning (first 3 cards)
      const isInStartDuplicates = scrollLeft <= 200;

      if (isInEndDuplicates) {
        // Jump to the corresponding position in the original data
        setIsTransitioning(true);
        const jumpToIndex = 3; // Jump to the start of original data
        const jumpCard = cardRefs.current[jumpToIndex];
        if (jumpCard) {
          container.scrollTo({ 
            left: jumpCard.offsetLeft - containerWidth / 2 + jumpCard.offsetWidth / 2, 
            behavior: 'instant' 
          });
          setTimeout(() => setIsTransitioning(false), 50);
        }
      } else if (isInStartDuplicates) {
        // Jump to the corresponding position at the end of original data
        setIsTransitioning(true);
        const jumpToIndex = servicesData.length + 2; // Jump to near the end of original data
        const jumpCard = cardRefs.current[jumpToIndex];
        if (jumpCard) {
          container.scrollTo({ 
            left: jumpCard.offsetLeft - containerWidth / 2 + jumpCard.offsetWidth / 2, 
            behavior: 'instant' 
          });
          setTimeout(() => setIsTransitioning(false), 50);
        }
      } else {
        // Normal scroll behavior - find closest card in the original data range
        const containerCenter = container.offsetWidth / 2;
        const containerScrollLeft = container.scrollLeft;
        const viewportCenter = containerCenter + containerScrollLeft;

        let closestIndex = 0;
        let minDistance = Infinity;

        // Only check cards in the original data range (index 3 to servicesData.length + 2)
        for (let i = 3; i < servicesData.length + 3; i++) {
          const card = cardRefs.current[i];
          if (card) {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = i - 3; // Convert back to original index
            }
          }
        }

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex);
        }
      }
    };

    // Add scroll event listener
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, isTransitioning]);


  // Handler for when a user clicks a card
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Create extended data array with duplicates for infinite scroll
  const extendedData = [
    ...servicesData.slice(-3), // Last 3 items at the beginning
    ...servicesData, // Original data
    ...servicesData.slice(0, 3) // First 3 items at the end
  ];

  return (
    <div
      ref={containerRef}
      // Added [perspective:1000px] and scrollbar-hiding classes
      className="flex items-center w-full overflow-x-auto pl-10 pr-0 py-8 [perspective:1000px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{ 
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      {extendedData.map((service, index) => {
        // Calculate the original index for active state comparison
        const originalIndex = index < 3 ? 
          servicesData.length - 3 + index : 
          index < servicesData.length + 3 ? 
            index - 3 : 
            index - servicesData.length - 3;
        
        const isActive = activeIndex === originalIndex;
        
        return (
          <div
            // Assign a ref to each card element
            ref={(el) => (cardRefs.current[index] = el)}
            key={`${service.title}-${index}`}
            onClick={() => handleCardClick(originalIndex)}
            // Base styles for all cards, including the precise transition from the original CSS
            className={`
              flex-shrink-0 w-64 h-96 mx-4 bg-[#313131] rounded-2xl shadow-md cursor-pointer 
              flex flex-col justify-center items-center text-center p-5 relative
              transition-all duration-[100ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              ${index === extendedData.length - 1 ? 'mr-10' : ''}
              ${
                // Conditional classes for the active vs. inactive cards
                isActive
                  ? 'scale-110 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-10' // Active state
                  : 'scale-85 opacity-60 z-0' // Inactive state
              }
            `}
            style={{
              // Ensure consistent vertical alignment regardless of scale
              alignSelf: 'center',
              transformOrigin: 'center center',
              marginTop: 0,
              marginBottom: 0
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ffd600]">{service.title}</h3>
            <p className="text-white">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCarousel;