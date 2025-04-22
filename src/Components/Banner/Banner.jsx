export function PromoBanner() {
    return (
      <div className="bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
              FLAT 50% OFF
            </h1>
            <div className="text-2xl md:text-3xl font-medium mb-6">
              12 Hours 20 Mins
            </div>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full 
              font-bold text-lg hover:bg-gray-100 transition-colors duration-200
              shadow-lg hover:shadow-xl">
              Explore now
            </button>
          </div>
  
          {/* Image Section */}
          <div className="md:flex-1 flex justify-center">
            <img 
              src="/path-to-your-image.png" // Update this path
              alt="Special Offer"
              className="max-w-xs md:max-w-md h-auto object-cover animate-float"
            />
          </div>
        </div>
      </div>
    );
  }