import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide
  const images = [
    "/images/sparepart1.png",
    "/images/sparepart2.png",
    "/images/sparepart3.png",
  ];

  // Move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
    <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="w-[50px] sm:w-[250px] md:w-[80px] h-auto" // Responsive image width
        />
      </div>

        <div className="flex items-center mb-6 px-6 sm:px-20 mt-7">
          <hr className="flex-grow border-t-3 border-red-500" />
          <span className="mx-4 text-4xl sm:text-5xl md:text-7xl text-red-500 font-bold">
            Category
          </span>
          <hr className="flex-grow border-t-3 border-red-500" />
        </div>
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center items-center mb-6 px-6 sm:px-20 mt-10">
          <p>Shop by Category – Made for Your Ride!</p>
        </div>
      
    <div className="relative w-full mt-20">
      {/* Slider Images */}
      <div className="flex justify-center items-center relative w-full h-56 sm:h-72 md:h-96">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-120 h-120 object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Slider Controls - Positioned below the image */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={prevImage}
          className="p-2 bg-white text-black rounded-full mx-2 sm:mx-4"
        >
          <FaArrowAltCircleLeft className="text-xl sm:text-2xl" />
        </button>
        <button
          type="button"
          onClick={nextImage}
          className="p-2 bg-white text-black rounded-full mx-2 sm:mx-4"
        >
          <FaArrowAltCircleRight className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
    </>
  );
};

export default ImageSlider;