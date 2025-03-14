import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import SpareHeader from "../../components/header/SpareHeader";
import SpareFooter from "../../components/footer/SpareFooter";

const SpareThankYou = () => {
  return (
    <>
      <SpareHeader />
      <div className="flex justify-center mt-5">
        <img
          src="/images/sparethank.png"
          alt="Thank you"
          className="h-[500px] w-auto"
        />
      </div>
      <div className="flex justify-center text-4xl font-semibold mt-5">
        <p>
          <span className="text-red-500">Thank You!</span> Your Order is
          Confirmed{" "}
        </p>
      </div>
      <div className="flex justify-center text-2xl font-medium mt-5">
        <p>
          Your order will be delivered within 2 days. We'll notify you once it's
          on the way!
        </p>
      </div>
      <div className="flex justify-center mt-5 ">
        <button className="flex items-center gap-3 bg-[#250707] text-white px-30 py-4 rounded-lg hover:bg-red-600 transition">
          <FaShoppingBag size={20} /> CONTINUE SHOPPING
        </button>
      </div>
      <div className="flex justify-center mt-5 mb-5 ">
        <button className="flex items-center gap-3 border text-black px-35 py-4 rounded-lg hover:bg-red-600 transition">
          <FaHome size={20} /> GO BACK HOME
        </button>
      </div>
      <SpareFooter />
    </>
  );
};

export default SpareThankYou;
