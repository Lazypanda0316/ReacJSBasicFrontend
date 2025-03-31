import React, { useEffect } from 'react';
import { devAPIURL } from '../../redux/api/api';
import { allProducts } from '../../redux/features/productSlice/productAction/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { setProductClearError } from '../../redux/features/productSlice/productSlice';
import { Link } from 'react-router-dom';

const ProductDisplay = () => {
  const { isloading, error, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let imageURl = devAPIURL.replace('/api', '');

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setProductClearError());
    }
  }, [dispatch, error]);

  if (isloading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="px-16 py-6 sm:px-16 sm:py-8 md:px-16 md:py-10 lg:px-16 lg:py-12 xl:px-16 xl:py-14">
      <h2 className="text-2xl font-bold mb-4">TOP SELLER:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {products &&
          products?.map((item) => (
           <Link to={`/product-details/${item._id}`}>
            <div key={item.id} className="bg-white shadow-md rounded-lg p-8 border">
              <img
                src={`${imageURl}/gallery/${item.foodImage}`}
                alt={item.foodTitle}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{item.foodTitle}</h3>
              <p className="text-gray-600 text-sm">{item.price}</p>
              <p className="text-sm text-gray-500">Stock: {item.stock}</p>
              <p className="text-sm text-gray-500">Description: {item.foodDescription}</p>
            </div>
           </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
