const Banner = () => {
    return (
      <section className="relative w-full h-[200px] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/src/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold max-w-3xl">
            Dive into Energetic House Parties with Verified Guests!
          </h1>
        </div>
      </section>
    );
  };
  
  export default Banner;
  