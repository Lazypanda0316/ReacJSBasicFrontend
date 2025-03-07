import React, { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import SpareHeader from "../../components/header/SpareHeader";
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import SpareReviewNav from "../spareReviewNav/SpareReviewNav";

const SparePartView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0); // State to track rating
  const [hoveredRating, setHoveredRating] = useState(0); // State to track hover effect

  const totalDots = 3;

  const handleStarClick = (index) => {
    setRating(index + 1); // Set rating on click
  };

  const handleStarHover = (index) => {
    setHoveredRating(index + 1); // Set hovered rating on hover
  };

  const handleStarHoverLeave = () => {
    setHoveredRating(0); // Reset hovered rating on hover leave
  };

  return (
    <>
      <SpareHeader />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-12 max-w-3xl w-full text-center">
          {/* Main Image */}
          <img
            src="/images/sparepart6.png"
            alt="Spare Part"
            className="mx-auto mb-8 rounded-lg w-full max-w-xl object-cover"
          />
          <h2 className="text-3xl font-bold mb-6">Spare Part Title</h2>
          <p className="text-gray-600 text-xl">This is my description page.</p>

          {/* Navigation Arrows and Dots */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <HiOutlineChevronLeft className="text-red-500 text-3xl cursor-pointer" />
            {Array.from({ length: totalDots }).map((_, index) => (
              <span
                key={index}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 w-6" : "bg-gray-300"
                }`}
              ></span>
            ))}
            <HiOutlineChevronRight className="text-red-500 text-3xl cursor-pointer" />
          </div>

          {/* Small Image Containers (Added Below) */}
          <div className="flex justify-center items-center gap-4 mt-6 overflow-x-auto space-x-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="p-4 w-24 h-24 cursor-pointer hover:shadow-md transition">
                <img
                  src={`/images/sparepart${num}.png`}
                  alt={`Spare Part ${num}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 max-w-2xl w-full">
          <h2 className="text-gray-400 -mt-50">#009Abc3456</h2>
          <h1 className="text-4xl text-red-500 font-semibold mt-3">
            Bosch Premium FILTECH Oil Filter
          </h1>
          <h3 className="text-[16px] mt-3">
            Model 3323 | High-Performance Engine Protection
          </h3>
          <p className="flex items-center text-center mt-5">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  hoveredRating >= index + 1 || rating >= index + 1
                    ? "text-amber-500"
                    : "text-gray-300"
                }`}
                size={25}
                onClick={() => handleStarClick(index)}
                onMouseEnter={() => handleStarHover(index)}
                onMouseLeave={handleStarHoverLeave}
              />
            ))}
            <span className="ml-2">({rating}.0)</span>
            <p className="px-25 text-sm text-gray-400">12 reviews</p>
          </p>
          <h1 className="font-medium text-[24px] mt-5">COMPATIBLE WITH:</h1>
          <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg max-w-max mt-4">
            <p>Toyota Camry (2015-2023) – 2.5L & 3.5L engine models</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg max-w-max mt-4">
            <p>Nissan Altima (2016-2023) – All trims</p>
          </div>

          {/* Quantity Counter */}
          <div className="flex items-center p-2 space-x-4 mt-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-6 py-3 text-lg bg-red-500 text-white rounded-lg hover:bg-red-400 transition flex items-center justify-center"
            >
              -
            </button>
            <span className="px-6 text-xl font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-6 py-3 text-lg bg-red-500 text-white rounded-lg hover:bg-red-400 transition flex items-center justify-center"
            >
              +
            </button>
          </div>
          <p className="text-gray-400 mt-4">PRICE</p>
          <p className="text-4xl font-semibold text-red-600">NPR 40,000</p>

          <div className="flex items-center space-x-4 mt-4 flex-wrap justify-center">
            <div className="border px-7 py-4 bg-gray-200 text-black rounded-lg flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-300 transition w-full sm:w-auto">
              <span className="text-xl">
                <BsCart2 />
              </span>
              <p className="font-medium">Add to Cart</p>
            </div>

            <div className="border px-10 py-4 bg-red-500 text-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-600 transition w-full sm:w-auto mt-4 sm:mt-0">
              <p className="font-medium">BUY NOW</p>
            </div>
          </div>
        </div>
      </div>

      <SpareReviewNav />
    </>
  );
};

export default SparePartView;
  