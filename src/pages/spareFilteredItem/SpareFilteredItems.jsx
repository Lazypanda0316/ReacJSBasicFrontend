import React, { useState } from 'react';

const SpareFilteredItems = () => {
  // Mock data for filtered spare parts
  const [items] = useState([
    { id: 1, name: 'Brake Pads', category: 'Brakes and Suspension', price: 50 },
    { id: 2, name: 'Oil Filter', category: 'Engine Part', price: 15 },
    { id: 3, name: 'Car Battery', category: 'Battery & Electricals', price: 120 },
    { id: 4, name: 'Shock Absorber', category: 'Brakes and Suspension', price: 80 },
    { id: 5, name: 'Engine Oil', category: 'Oil and Fluids', price: 25 },
  ]);

  const [filteredItems, setFilteredItems] = useState(items);
  const [sortBy, setSortBy] = useState('price');

  // Filter function for category
  const filterByCategory = (category) => {
    const filtered = items.filter(item => item.category === category);
    setFilteredItems(filtered);
  };

  // Sort function for price
  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    setFilteredItems(sortedItems);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Filtered Items</h1>

      {/* Filter and Sort Options */}
      <div className="mb-6">
        <h3 className="font-semibold">Filter by Category:</h3>
        <div className="flex space-x-4">
          <button onClick={() => filterByCategory('Brakes and Suspension')} className="p-2 border rounded">Brakes and Suspension</button>
          <button onClick={() => filterByCategory('Engine Part')} className="p-2 border rounded">Engine Part</button>
          <button onClick={() => filterByCategory('Battery & Electricals')} className="p-2 border rounded">Battery & Electricals</button>
          <button onClick={() => filterByCategory('Oil and Fluids')} className="p-2 border rounded">Oil and Fluids</button>
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <h3 className="font-semibold">Sort by:</h3>
        <select onChange={handleSortChange} value={sortBy} className="p-2 border rounded">
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Filtered Items List */}
      <div className="space-y-4">
        {filteredItems.map(item => (
          <div key={item.id} className="p-4 border rounded shadow-sm">
            <h4 className="text-xl font-semibold">{item.name}</h4>
            <p className="text-gray-700">Category: {item.category}</p>
            <p className="text-gray-500">Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpareFilteredItems;
