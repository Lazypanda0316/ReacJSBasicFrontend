import React from 'react';

const ServiceWeProvide = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Left Section */}
      <div className="bg-blue-950 text-white p-8 flex flex-col items-center sm:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          What <span className="text-sky-400">Service</span> Do We Provide?
        </h1>
        <p className="text-lg sm:text-xl mb-4 text-center">
          We work through a strategic approach—understanding your needs, crafting tailored solutions, and delivering with excellence.
        </p>
        {/* Centering the image */}
        <div className="flex justify-center mt-6 mb-5">
          <img src="/images/diamond.png" alt="Diamond Icon" className="w-auto h-60 sm:h-80" />
        </div>
      </div>

      {/* Right Section (Services List) */}
      <div className="space-y-4 p-8 text-white bg-blue-950 sm:w-1/2">
        <div className="flex items-center">
          <span className="text-3xl sm:text-4xl hover:text-gray-400 cursor-pointer">
            Ui/UX Designing
          </span>
        </div>
        <hr className="border-yellow-300 mb-6" />
        <div className="flex items-center">
          <span className="text-3xl sm:text-4xl hover:text-gray-400 cursor-pointer">
            Web Development
          </span>
        </div>
        <hr className="border-yellow-300 mb-6" />
        <div className="flex items-center">
          <span className="text-3xl sm:text-4xl hover:text-gray-400 cursor-pointer">
            Mobile App Development
          </span>
        </div>
        <hr className="border-yellow-300 mb-6" />
        <div className="flex items-center">
          <span className="text-3xl sm:text-4xl hover:text-gray-400 cursor-pointer">
            Quality Assurance
          </span>
        </div>
        <hr className="border-yellow-300 mb-6" />
        <div className="flex items-center">
          <span className="text-3xl sm:text-4xl hover:text-gray-400 cursor-pointer">
            Digital Marketing
          </span>
        </div>
        <hr className="border-yellow-300 mb-6" />
      </div>
    </div>
  );
};

export default ServiceWeProvide;
