import React from 'react';

const NepalCashmere = () => {
  return (
    <div className="bg-blue-500 text-white text-7xl font-archivo font-bold h-screen relative">
      {/* Background Image */}
      <img 
        src="images/newcashh.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Nepal Cashmere Background"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        <h1>NEPAL CASHMERE</h1>
        <img 
          src="images/newcash.png" 
          className="transition-all duration-300 h-100vh hover:scale-105" 
          alt="Nepal Cashmere Logo"
        />
      </div>
    </div>
  );
};

export default NepalCashmere;
