import React from "react";
import { trusts } from "../howWework/workJson/Data";
import "./Trusted.css";

const TrustedBy = () => {
  return (
    <div className="bg-blue-950 text-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold">
        Trusted By
      </h2>

      {/* Description */}
      <p className="mt-2 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-center">
        We are proud to have earned the trust of leading brands and businesses
        across various industries. Our commitment to quality, innovation, and
        customer satisfaction has made us a preferred IT solutions partner.
      </p>

      {/* Logo Scroller */}
      <div className="overflow-hidden mt-6">
        <div className="flex w-[200%] scroll-container">
          {trusts.concat(trusts).map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className="h-8 sm:h-10 lg:h-12 w-auto mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;