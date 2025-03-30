import React, { useEffect } from 'react'
import { devAPIURL } from '../../redux/api/api';
import { allProducts } from '../../redux/features/productSlice/productAction/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { setProductClearError } from '../../redux/features/productSlice/productSlice';


const ProductDisplay = () => {
  const{isloading, error, products}= useSelector(
    (state)=>state.product
  );

  const dispatch = useDispatch();
   let imageURl = devAPIURL.replace("/api", "");
 
   useEffect(()=>{
    dispatch(allProducts())
   },[dispatch])

   useEffect(()=>{
    if(error){
      dispatch(setProductClearError())
    
    }
   },[dispatch,error])

  if(isloading){
    return <h1>Loading......</h1>
  }
  return (
  <>
  {products && products?.map((item)=>(
      <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div  className="bg-white shadow-md rounded-lg p-4 border">
            <img
              src={`${imageURl}/gallery/${item.foodImage}`}
              alt={item.foodTitle}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{item.foodTitle}</h3>
            <p className="text-gray-600 text-sm">{item.price}</p>
            <p className="font-bold text-lg mt-2"></p>
            <p className="text-sm text-gray-500">Stock:{item.stock} </p>
          </div>

      </div>
    </div>
  ))}
  </>
  )
}
export default ProductDisplay;
