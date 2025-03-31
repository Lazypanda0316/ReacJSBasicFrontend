import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { devAPIURL } from '../../redux/api/api';
import { setProductClearError } from '../../redux/features/productSlice/productSlice';
import { publicProductDetails } from '../../redux/features/productSlice/productAction/productAction';


const ProductDisplayDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, error, product } = useSelector((state) => state.product);
  console.log("product",product)
  const imageURL = devAPIURL.replace('/api', '');

  useEffect(() => {
    if (id) {
      dispatch(publicProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      dispatch(setProductClearError());
    }
  }, [dispatch]);

  if(!product){
    return <h1>No Data Found</h1>
  }

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg w-3/4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Details</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img className="w-full h-64 object-cover rounded-lg" src={`${imageURL}/gallery/${product?.foodImage}`} alt={product?.foodTitle} />
        </div>
        <div>
          {isLoading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-3">{product?.foodTitle}</h2>
              <p className="text-gray-700 text-lg mb-4">{product?.foodDescription}</p>
              <p className="text-gray-900 text-xl font-semibold mb-4">Rs. {product?.price}</p>
              <p className="text-lg font-medium">Stock: {product?.stock}</p>
              <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg hover:bg-orange-600 transition">Buy Now</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayDetail;
