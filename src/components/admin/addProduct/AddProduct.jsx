import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const categories = ["Electronics", "Clothing", "Books", "Furniture"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted:", product);
    alert("Product added successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg w-3/4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-semibold">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product price"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product description"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-semibold">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-semibold">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;