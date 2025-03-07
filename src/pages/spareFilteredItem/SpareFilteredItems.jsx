import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const products = [
  { id: 1, img: "/images/sparepart1.png", name: "Brake Pads", category: "Brakes and Suspension", price: 3000 },
  { id: 2, img: "/images/sparepart2.png", name: "Oil Filter", category: "Engine Part", price: 3000 },
  { id: 3, img: "/images/sparepart3.png", name: "Car Battery", category: "Battery & Electricals", price: 3000 },
  { id: 4, img: "/images/sparepart4.png", name: "Shock Absorber", category: "Brakes and Suspension", price: 3000 },
  { id: 5, img: "/images/sparepart5.png", name: "Engine Oil", category: "Oil and Fluids", price: 3000 },
  { id: 6, img: "/images/sparepart5.png", name: "Engine Oil", category: "Oil and Fluids", price: 3000 },
  { id: 7, img: "/images/sparepart5.png", name: "Engine Oil", category: "Oil and Fluids", price: 3000 },
  { id: 8, img: "/images/sparepart5.png", name: "Engine Oil", category: "Oil and Fluids", price: 3000 },
];

const ITEMS_PER_PAGE = 6;

const SpareShopPart = () => {
  const [filteredItems, setFilteredItems] = useState(products);
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredItems(products);
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    setFilteredItems(sortedItems);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Filter and Sort Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex flex-wrap items-center mb-4 sm:mb-0">
          <h3 className="font-semibold mr-4">Filter by Category:</h3>
          <div className="flex flex-wrap space-x-4">
            <button onClick={() => filterByCategory("All")} className="p-2 border rounded">All</button>
            <button onClick={() => filterByCategory("Brakes and Suspension")} className="p-2 border rounded">Brakes and Suspension</button>
            <button onClick={() => filterByCategory("Engine Part")} className="p-2 border rounded">Engine Part</button>
            <button onClick={() => filterByCategory("Battery & Electricals")} className="p-2 border rounded">Battery & Electricals</button>
            <button onClick={() => filterByCategory("Oil and Fluids")} className="p-2 border rounded">Oil and Fluids</button>
          </div>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-semibold mr-4">Sort by:</h2>
          <select onChange={handleSortChange} value={sortBy} className="ml-2 p-1 border rounded">
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Products Grid with Two Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentItems.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition bg-white p-4">
            <img src={item.img} alt={item.name} className="w-full h-72 object-cover mb-4" />
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-gray-700">Category: {item.category}</p>
            <p className="text-red-500 font-bold">Price: Rs.{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button onClick={() => goToPage(currentPage - 1)} className="p-2 text-red-500 mx-2" disabled={currentPage === 1}>
          <FaArrowAltCircleLeft size={24} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`p-2 text-red-500 font-bold mx-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} className="p-2 text-red-500 mx-2" disabled={currentPage === totalPages}>
          <FaArrowAltCircleRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpareShopPart;
