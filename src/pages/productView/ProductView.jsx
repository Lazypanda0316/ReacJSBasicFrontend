import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = ({ items }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleProducts = items.find((item) => item.id === Number(id));
      setSingleProduct(singleProducts);
    }
  }, [id, items]);

  if (!singleProduct) {
    return <h1 className="text-center text-xl font-bold">No Data Found</h1>;
  }

  return (
    <div className="container mx-auto px-5 mt-5 mb-5 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-4xl">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            className="w-full h-auto max-h-96 object-contain rounded-lg"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 w-full">
          <h1 className="font-bold text-2xl mb-2">{singleProduct.title}</h1>
          <h2 className="font-semibold text-gray-800 mb-1">
            {singleProduct.category}
          </h2>
          <p className="text-gray-700 text-lg font-medium mb-2">
            ${singleProduct.price}
          </p>
          <div className="flex items-center space-x-2">
            <button
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50"
              onClick={decrease}
              disabled={quantity === 1}
            >
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-gray-100 text-gray-500 hover:bg-gray-200"
              onClick={increase}
            >
              +
            </button>
          </div>
          <button
            className="mt-4 bg-blue-950 text-white px-4 py-2 mr-6 rounded-lg hover:bg-green-500 transition "
            onClick={() => addToCart(singleProduct)}
          >
            Buy Now!
          </button>
          <button
            className="mt-10 bg-blue-950 text-white px-4 py-2 mb-3 rounded-lg hover:bg-orange-400 transition"
            onClick={() => addToCart(singleProduct)}
          >
            Add to Cart
          </button>
          <p className="text-base text-gray-600 leading-relaxed">
            {singleProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
