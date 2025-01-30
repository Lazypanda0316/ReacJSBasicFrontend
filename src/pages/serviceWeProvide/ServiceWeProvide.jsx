import React from 'react';

const ServiceWeProvide = () => {
  return (
    <div className='grid grid-cols-2 gap-0'>
      <div className='bg-blue-950 text-white p-8  '>
        <h1 className='text-5xl font-bold mb-4 flex justify-center place-items-center'>What Service Do We Provide?</h1>
        <p className='text-2xl mb-0 flex justify-center place-items-center'>
          We work through a strategic approach—understanding your needs, crafting tailored solutions, and delivering with excellence.
        </p>
        <img src="/images/diamond.png" alt="Diamond Icon" className='w-auto h-80  '/>
      </div>
      <div className='space-y-4 p-8 text-white bg-blue-950'>
      <div className='flex items-center'>
          <span className='text-4xl hover:text-gray-400 cursor-pointer '>Ui/UX Designing</span>
        </div><hr className='border-yellow-300 mb-15'/>
        <div className='flex items-center'>
          <span className='text-4xl hover:text-gray-400 cursor-pointer '>Web Development</span>
        </div><hr className='border-yellow-300 mb-15'/>
        <div className='flex items-center'>
          <span className='text-4xl hover:text-gray-400 cursor-pointer '>Mobile App Development</span>
        </div><hr className='border-yellow-300 mb-15'/>
        <div className='flex items-center'>
          <span className='text-4xl hover:text-gray-400 cursor-pointer '>Quality Assurance</span>
        </div><hr className='border-yellow-300 mb-15'/>
        <div className='flex items-center'>
          <span className='text-4xl hover:text-gray-400 cursor-pointer '>Digital Marketing</span>
        </div><hr className='border-yellow-300 mb-15'/> 
      </div>
    </div>
  );
};

export default ServiceWeProvide;