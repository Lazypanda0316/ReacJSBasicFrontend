import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setAdminClearError } from "../../../redux/features/adminSlice/adminSlice";
import {editProductAction,singleProduct,} from "../../../redux/actionSlice/adminAction/adminAction";
import { devAPIURL } from "../../../redux/api/api";

const EditProduct = () => {
  const { loading, error,isError, product } = useSelector((state) => state.admin);
  const { id } = useParams();
  let imageURl = devAPIURL.replace("/api", "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productValue, setProductValue] = useState({
    foodTitle: "",
    foodDescription: "",
    price: "",
    stock: "",
  });

  const { foodTitle, foodDescription, price, stock } = productValue;

  const [foodImage, setFoodImage] = useState(null); //usestate rerenders the component
  const [foodImagePreview, setFoodImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductValue({ ...productValue, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setFoodImagePreview(reader.result);
        setFoodImage(file);
      };
    }
  };

  useEffect(() => {
    if (product) {
      setProductValue({
        foodTitle: product.foodTitle || "",
        foodDescription: product.foodDescription || "",
        price: product.price || "",
        stock: product.stock || "",
      });
      setFoodImagePreview(`${imageURl}/gallery/${product.foodImage || null}`);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foodTitle", foodTitle);
    formData.append("foodDescription", foodDescription);
    formData.append("price", price);
    formData.append("foodImage", foodImage);
    formData.append("stock", stock);

    dispatch(editProductAction({ id, formData, toast, navigate }));
  };

  useEffect(() => {
    if (id) {
      dispatch(singleProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      dispatch(setAdminClearError());
    }
  }, [dispatch, error]); //  "[]" every thing in this are dependency. \\ when dependencies changes the dependencies state changes when executed. \\ if the bracket is not there it will execute at every rerender. \\ if the bracket is empty there it will run at first render only

  useEffect(() => {
    toast.error(isError);
    dispatch(setAdminClearError());
  }, [dispatch,isError]);

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg w-3/4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            name="foodTitle"
            value={foodTitle}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product price"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            name="foodDescription"
            value={foodDescription}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product description"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold">stock</label>
          <textarea
            name="stock"
            value={stock}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Enter product description"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Product Image
          </label>
          <input
            type="file"
            name="foodImage"
            accept="image/*"
            onChange={handleFileInputChange}
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>
        {foodImagePreview && <img src={foodImagePreview} alt="foodImage" />}

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Edit Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
