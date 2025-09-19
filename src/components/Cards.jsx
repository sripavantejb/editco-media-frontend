import React from 'react';

const services = [
    {
      name: 'Reel Editing',
      desc: 'Trend-based editing for Instagram/TikTok reels with transitions, motion effects, captions, and music sync.',
    },
    {
      name: 'Shirt Editing',
      desc: 'Design enhancements and retouching for clothing products.',
    },
    {
      name: 'Thumbnail Editing',
      desc: 'Attention-grabbing thumbnails optimized for YouTube, Instagram, and short-form content.',
    },
    {
      name: 'T-Shirt Mockups',
      desc: 'High-quality mockups for merchandise presentation and client approvals.',
    },
    {
      name: 'AI Chatbots',
      desc: 'Customized AI chatbot solutions for websites and social platforms.',
    },
    {
      name: 'AI Websites',
      desc: 'Lightweight websites built using AI and no-code platforms tailored to client needs.',
    },
    {
      name: 'Social Media Management',
      desc: 'Content scheduling, caption writing, hashtag strategy, and analytics.',
    },
    {
      name: 'Digital Marketing',
      desc: 'Campaign design, Meta/Google ads, branding support, and growth strategy.',
    },
    {
      name: 'Logo Design & Branding',
      desc: 'Custom logo creation, brand identity packages, and visual branding guidelines for businesses.',
    },
    {
      name: 'Web Development',
      desc: 'Responsive websites and web applications using modern frameworks like React, with database integration and API development.',
    },
  ];
  

function Cards() {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-start p-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="relative w-[210px] h-[315px] bg-[#313131] rounded-[20px] flex flex-col items-center justify-center text-white transition-all duration-200 ease-in-out hover:scale-105 hover:-rotate-1 group overflow-hidden m-3 p-4"
        >
          {/* SVG visual */}
          <svg className="img absolute left-0 right-0 mx-auto w-full h-[32%] z-10 transition-all duration-200 ease-in-out group-hover:h-[65%] group-hover:blur-[7px] group-hover:animate-ethfloat"
            xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="100%" viewBox="0 0 784.37 1277.39">
            <g id="Layer_x0020_1">
              <g id="_1421394342400">
                <g>
                  <polygon fill="#343434" fillRule="evenodd" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"></polygon>
                  <polygon fill="#8C8C8C" fillRule="evenodd" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"></polygon>
                  <polygon fill="#3C3C3B" fillRule="evenodd" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"></polygon>
                  <polygon fill="#8C8C8C" fillRule="evenodd" points="392.07,1277.38 392.07,956.52 -0,724.89"></polygon>
                  <polygon fill="#141414" fillRule="evenodd" points="392.07,882.29 784.13,650.54 392.07,472.33"></polygon>
                  <polygon fill="#393939" fillRule="evenodd" points="0,650.54 392.07,882.29 392.07,472.33"></polygon>
                </g>
              </g>
            </g>
          </svg>
          {/* Centered Text */}
          <div className="textBox opacity-0 flex flex-col items-center justify-center gap-[20px] z-20 transition-opacity duration-200 group-hover:opacity-100 px-3">
            <p className="font-bold text-[20px] leading-tight text-center">{service.name}</p>
            <span className="text-[13px] text-gray-200 text-center">{service.desc}</span>
          </div>
        </div>
      ))}
      <style>
        {`
          @keyframes ethfloat {
            0% { transform: translateY(0);}
            50% { transform: translateY(-20px);}
            100% { transform: translateY(0);}
          }
          .group-hover\\:animate-ethfloat:hover {
            animation: ethfloat 3s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Cards;
