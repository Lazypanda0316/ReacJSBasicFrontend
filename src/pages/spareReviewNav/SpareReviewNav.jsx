import React, { useState } from 'react';
import SpareDescription from '../spareDescription/SpareDescription';
import Sparecompatability from '../spareCompatability/Sparecompatability';
import SpareReview from '../spareReview/SpareReview';

const SpareReviewNav = () => {
  const [isShowDescription, setIsShowDescription] = useState('description');

  const handleDescription = () => {
    setIsShowDescription('description');
  };

  const handleCompatibility = () => {
    setIsShowDescription('compatibility');
  };

  const handleReview = () => {
    setIsShowDescription('review');
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-around p-4 bg-gray-200">
        <button
          className={`${
            isShowDescription === 'description'
              ? 'underline text-lg font-medium hover:text-amber-500 transition duration-200 rounded-tl-lg'
              : 'text-lg font-medium hover:text-amber-500 transition duration-200'
          } w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2`}
          onClick={handleDescription}
        >
          Description
        </button>
        <button
          className={`${
            isShowDescription === 'compatibility'
              ? 'underline text-lg font-medium hover:text-amber-500 transition duration-200'
              : 'text-lg font-medium hover:text-amber-500 transition duration-200'
          } w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2`}
          onClick={handleCompatibility}
        >
          Compatibility
        </button>
        <button
          className={`${
            isShowDescription === 'review'
              ? 'underline text-lg font-medium hover:text-amber-500 transition duration-200 rounded-tr-lg'
              : 'text-lg font-medium hover:text-amber-500 transition duration-200'
          } w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2`}
          onClick={handleReview}
        >
          Review
        </button>
      </div>

      {/* Conditional Content */}
      {isShowDescription === 'description' && (
        <div className="p-4">
          <SpareDescription />
        </div>
      )}

      {isShowDescription === 'compatibility' && (
        <div className="p-4">
          <Sparecompatability />
        </div>
      )}

      {isShowDescription === 'review' && (
        <div className="p-4">
          <SpareReview />
        </div>
      )}
    </div>
  );
};

export default SpareReviewNav;
