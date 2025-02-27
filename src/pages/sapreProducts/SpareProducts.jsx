import React from "react";
import SpareDashboard from "../spaerDashboard/SpareDashboard";

const categories = [
  { id: 1, title: "Car Battery", img: "/images/sparepart1.png" },
  { id: 2, title: "Engine Oil", img: "/images/sparepart2.png" },
  { id: 3, title: "Brake Pads", img: "/images/sparepart3.png" },
  { id: 4, title: "Spark Plug", img: "/images/sparepart4.png" },
  { id: 5, title: "Air Filter", img: "/images/sparepart5.png" },
  { id: 6, title: "Tire", img: "/images/sparepart6.png" },
];

const SpareProducts = () => {
  return (
    <div>
      {/* Banner Image */}
      <img
        src="/images/sparepart9.png"
        className="w-full"
        alt="bhroom bhroom"
      />

      {/* Title and Description */}
      <div className="mt-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Our <span className="text-red-500">Products</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Quickly find what you need by searching with a part number or product
          name – it's simple and dependable!
        </p>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto p-6 mt-10">
        {/* Flexbox Row for Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition w-full"
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

      <SpareDashboard />
    </div>
  );
};

export default SpareProducts;
