import React from 'react';

const WhatWeBuild = () => {
  return (
    <div className='font-archivo bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8'>
      {/* Heading */}
      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center'>
        What We’ve <span className='text-blue-400'>Built</span>
      </h1>

      {/* Subheading */}
      <p className='text-xl sm:text-2xl lg:text-3xl text-center mt-4 sm:mt-6'>
        Discover the exciting innovations we've crafted together!
      </p>
    </div>
  );
};

export default WhatWeBuild;