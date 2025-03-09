import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of objects with image and product name
  const products = [
    { image: "/images/sparepart1.png", name: "Premium Oil Filter" },
    { image: "/images/sparepart2.png", name: "High-Performance Brake Pads" },
    { image: "/images/sparepart3.png", name: "Advanced Engine Air Filter" },
  ];

  // Move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
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
        {/* Image Container with Red Highlight */}
        <div className="relative w-[600px] sm:w-[750px] md:w-[850px] h-[350px] sm:h-[450px] md:h-[500px] flex justify-center items-center space-x-4">
          {/* Preview Image Left */}
          <div className="w-[100px] sm:w-[150px] md:w-[200px] h-full flex justify-center items-center">
            <img
              src={products[(currentIndex - 1 + products.length) % products.length].image}
              alt="prev"
              className="w-full h-full object-contain rounded-md opacity-50 hover:opacity-100 transition"
            />
          </div>

          {/* Main Image */}
          <div className="relative w-[400px] sm:w-[550px] md:w-[450px] md:h-[500px] flex flex-col justify-center items-center bg-red-500 rounded-lg p-4 transition-all duration-500">
            <img
              src={products[currentIndex].image}
              alt={`slide-${currentIndex}`}
              className="w-full h-full object-contain rounded-md transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Preview Image Right */}
          <div className="w-[100px] sm:w-[150px] md:w-[200px] h-full flex justify-center items-center">
            <img
              src={products[(currentIndex + 1) % products.length].image}
              alt="next"
              className="w-full h-full object-contain rounded-md opacity-50 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Product Name */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {products[currentIndex].name}
        </p>

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
