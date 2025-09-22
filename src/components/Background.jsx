import React from 'react'

function Background() {
  return (
    <>
      <section className="mt-10 relative z-0 w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="https://res.cloudinary.com/dqataciy5/video/upload/v1758301511/Timeline_1_xhvbls.mov"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
    </>

  )
}

export default Background
