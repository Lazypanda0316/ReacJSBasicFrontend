import React from 'react';
import SpareHeader from '../../components/header/SpareHeader';
import SpareDashboard from '../spaerDashboard/SpareDashboard';
import SpareFooter from '../../components/footer/SpareFooter';

const categories = [
  { id: 1, title: "Car Battery", img: "/images/sparepart1.png" },
  { id: 2, title: "Engine Oil", img: "/images/sparepart2.png" },
  { id: 3, title: "Brake Pads", img: "/images/sparepart3.png" },
  { id: 4, title: "Spark Plug", img: "/images/sparepart4.png" },
  { id: 5, title: "Air Filter", img: "/images/sparepart5.png" },
  { id: 6, title: "Tire", img: "/images/sparepart6.png" }
];

const SpareShopPart = () => {
  return (
    <>
      {/* Header */}
      <div>
        <SpareHeader />
      </div>

      {/* Banner Section */}
      <div 
        className="h-[300px] w-full flex items-center justify-center px-10 bg-gray-100 text-black relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/spare2.jpg')" }}
      >
        <h1 className="text-4xl font-bold">SHOP PARTS</h1>
      </div>

      {/* Categories Section (Single Row) */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-left mb-6">Sort by Category</h2>

        {/* Flexbox Row with Spacing */}
        <div className="flex flex-nowrap justify-center space-x-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition w-[14%] text-center"
            >
              {/* Image */}
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-48 object-cover group-hover:opacity-75 transition"
              />

              {/* Title Below Image */}
              <p className="mt-2 text-lg font-medium">{category.title}</p>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg font-semibold">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpareDashboard/>

    </>
  );
};

export default SpareShopPart;
