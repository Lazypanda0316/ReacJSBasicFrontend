import React, { useState } from "react";

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
          className="w-100 h-100 object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Slider Controls - Positioned below the image */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={prevImage}
          className="p-2 bg-white text-black rounded-full mx-4"
        >
          &#60;
        </button>
        <button
          type="button"
          onClick={nextImage}
          className="p-2 bg-white text-black rounded-full mx-4"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

const SpareCategory = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="w-[] h-[53px]" // Adjust these values for desired image size
        />
      </div>

      <div className="flex items-center mb-6 px-60 mt-7">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl text-red-500 font-bold">Category</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      <div className="font-bold text-3xl flex justify-center items-center mb-6 px-60 mt-10">
        <p>
          Shop by Category –{" "}
          <span className="text-red-500"> Made for Your Ride!</span>
        </p>
      </div>

      {/* Image Slider Component */}
      <ImageSlider />

      {/* View All Button */}
      <div className="flex justify-center items-center mt-6">
        <button className="bg-black text-white flex justify-center items-center p-7 px-15 rounded-lg mb-15 mt-15">
          View All
        </button>
      </div>
    </>
  );
};

export default SpareCategory;
