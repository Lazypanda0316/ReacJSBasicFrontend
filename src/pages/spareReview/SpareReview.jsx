import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Carla Donin",
    avatar: "/images/spareR1.png",
    text: "One word: Amazing! This book was an absolute blast to read and I loved reading every minute of it. This was such a well-crafted book with heartfelt emotions.",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "/images/spareR1.png",
    text: "One word : Amazing! This book was an absolute blast to read and I loved reading every minute of it. This was such a well crafted book with heartfelt emotions.",
  },
  {
    id: 3,
    name: "Jane Smith",
    avatar: "/images/spareR1.png",
    text: "One word : Amazing! This book was an absolute blast to read and I loved reading every minute of it. This was such a well crafted book with heartfelt emotions.",
  },
];

const SpareReview = () => {
  const [ratings, setRatings] = useState(reviews.map(() => 0));
  const [hoveredRatings, setHoveredRatings] = useState(reviews.map(() => 0));

  const handleStarClick = (index, reviewIndex) => {
    const newRatings = [...ratings];
    newRatings[reviewIndex] = index + 1;
    setRatings(newRatings);
  };

  const handleStarHover = (index, reviewIndex) => {
    const newHoveredRatings = [...hoveredRatings];
    newHoveredRatings[reviewIndex] = index + 1;
    setHoveredRatings(newHoveredRatings);
  };

  const handleStarHoverLeave = (reviewIndex) => {
    const newHoveredRatings = [...hoveredRatings];
    newHoveredRatings[reviewIndex] = 0;
    setHoveredRatings(newHoveredRatings);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section - Reviews */}
      <div className="w-full md:w-2/3">
        {reviews.map((review, reviewIndex) => (
          <div key={review.id} className="mb-8">
            <div className="flex items-center font-archivo">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h1 className="font-medium p-5 text-[18px]">{review.name}</h1>
            </div>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer transition-all duration-200 ${
                    hoveredRatings[reviewIndex] >= index + 1 ||
                    ratings[reviewIndex] >= index + 1
                      ? "text-amber-500"
                      : "text-gray-300"
                  }`}
                  size={25}
                  onClick={() => handleStarClick(index, reviewIndex)}
                  onMouseEnter={() => handleStarHover(index, reviewIndex)}
                  onMouseLeave={() => handleStarHoverLeave(reviewIndex)}
                />
              ))}
              <span className="ml-2 text-lg font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-500 mt-2">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Right Section - Rating Summary */}
      <div className="w-full md:w-1/3 border p-4 font-medium font-archivo flex flex-col space-y-4 max-h-[500px] overflow-y-auto">
        <div className="flex justify-between items-center space-x-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mt-5">4.4</h1>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" size={20} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-lg mt-5 font-semibold">Total Reviews</div>
            <h2 className="text-2xl font-bold">10,000</h2>
          </div>
        </div>

        <div className="space-y-9 mt-5">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={star} className="flex items-center space-x-2">
              <span className="w-4">{star}</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={[
                    "h-5 rounded-full",
                    index === 0 ? "bg-green-400 w-3/5" : "",
                    index === 1 ? "bg-orange-400 w-2/5" : "",
                    index === 2 ? "bg-blue-400 w-2/5" : "",
                    index === 3 ? "bg-pink-400 w-4/12" : "",
                    index === 4 ? "bg-red-400 w-1/4" : "",
                  ].join(" ")}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpareReview;
