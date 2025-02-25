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
    <div className="relative w-full mt-20">
      {/* Slider Images */}
      <div className="flex justify-center items-center relative w-full h-56 md:h-96">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-90 h-90 object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Slider Controls - Positioned below the image */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={prevImage}
          className="p-2 bg-white text-black rounded-full mx-4"
        >
          <FaArrowAltCircleLeft className="text-2xl" />
        </button>
        <button
          type="button"
          onClick={nextImage}
          className="p-2 bg-white text-black rounded-full mx-4"
        >
          <FaArrowAltCircleRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
