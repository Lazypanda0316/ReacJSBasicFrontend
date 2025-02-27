import React from 'react';

const SparePageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 md:px-8 lg:px-16 space-y-6 text-center">
      {/* Image Section */}
      <div className="flex justify-center items-center w-full">
        <img
          src="/images/sparenotfound.png"
          alt="Page Not Found"
          className="w-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl h-auto object-cover opacity-90"
        />
      </div>

      {/* Text Section */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          <span className='text-red-500'>Oops!</span> Page Not Found
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-black">
          The page you are looking for might have been moved or doesn’t exist anymore.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-black">Let’s get you back on track!</p>
      </div>
    </div>
  );
};

export default SparePageNotFound;