import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearError } from "../../redux/features/authSlice/authSlice";
import { getProducts } from "../../redux/actionSlice/authAction/authAction";

const Projects = () => {
  const { isLoading, error, products } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setClearError());
    }
  }, [dispatch, error]);

  if (isLoading) {
    return <h1 className="text-center text-2xl font-bold text-gray-700">Loading...</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{item.descriptions}</p>
            <p className="text-lg font-bold text-green-600 mt-2">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
