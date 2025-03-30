import React, { useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminClearError } from "../../../redux/features/adminSlice/adminSlice";
import { allProducts, deleteProductAction } from "../../../redux/actionSlice/adminAction/adminAction";
import { devAPIURL } from "../../../redux/api/api";
import { toast } from "react-toastify";

const AllMail = () => {
  const { isLoading, error, isError, products } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();
  const imageURL = devAPIURL.replace("/api", "");

  useEffect(() => {
    if (error) {
      dispatch(setAdminClearError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (isError) {
      dispatch(setAdminClearError());
    }
  }, [dispatch, isError]);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProductAction({id,toast}));
  };

  return (
    <div className="p-6">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 ">Inbox</h1>
        <NavLink
          to="/admin-dashboard/add-product"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600"
        >
          Add Product
        </NavLink>
      </div>

      <div className="relative overflow-x-auto shadow-md rounded-lg">
        {isLoading ? (
          <p className="text-center p-4">Loading...</p>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="text-sm uppercase bg-gray-200">
              <tr>
                <th className="px-6 py-3">S.N</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => (
                <tr key={item._id} className="border-b dark:border-gray-700">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{item.foodTitle}</td>
                  <td className="px-6 py-4 text-sm">Rs. {item.price}</td>
                  <td className="px-6 py-4 text-sm">{item.stock}</td>
                  <td className="px-6 py-4 text-sm">
                    <img
                      src={`${imageURL}/gallery/${item.foodImage}`}
                      alt={item.foodTitle}
                      className="h-8 w-8 object-contain"
                    />
                  </td>
                  <td className="px-6 py-4 text-center flex justify-center gap-4">
                    <Link
                      to={`/admin-dashboard/edit-product/${item._id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={16} />
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 cursor-pointer "
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllMail;
