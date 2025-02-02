import React from 'react';

const NepalCashmere = () => {
  return (
    <div className="bg-blue-500 text-white font-archivo font-bold min-h-screen relative flex flex-col items-center justify-center text-center px-4">
      {/* Background Image */}
      <img 
        src="images/newcashh.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Nepal Cashmere Background"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl">NEPAL CASHMERE</h1>
        <img 
          src="images/newcash.png" 
          className="transition-all duration-300 h-70 w-100 sm:h-72 sm:w-72 md:h-[70vh] md:w-[80vh] lg:h-[80vh] lg:w-[90vh] max-w-full hover:scale-105" 
          alt="Nepal Cashmere Logo"
        />
      </div>
    </div>
  );
};

export default NepalCashmere;
