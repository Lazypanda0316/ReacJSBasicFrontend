import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      {/* Heading */}
      <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="w-[80px] sm:w-[200px] md:w-[80px] h-auto"
        />
      </div>

      <div className="flex items-center mb-6 px-6 sm:px-20 mt-7">
        <hr className="flex-grow border-t-4 border-red-500" />
        <span className="mx-4 text-4xl sm:text-5xl md:text-7xl text-red-500 font-bold">
          Category
        </span>
        <hr className="flex-grow border-t-4 border-red-500" />
      </div>
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center items-center mb-6 px-6 sm:px-20 mt-10">
        <p>Shop by Category – Made for Your Ride!</p>
      </div>

      {/* Image Slider */}
      <div className="flex flex-col items-center mt-10">
        {/* Image Container */}
        <div className="relative w-[400px] h-[250px] sm:w-[550px] sm:h-[350px] md:w-[700px] md:h-[450px] flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full h-full object-contain transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Slider Controls - Below the Image */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            type="button"
            onClick={prevImage}
            className="p-3 text-black rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowAltCircleLeft className="text-3xl sm:text-4xl" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="p-3 text-black rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowAltCircleRight className="text-3xl sm:text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
