import React from "react";
import { Link } from "react-router-dom";

const Home = ({ items, toggleReadMore, expanded }) => {
  return (
    <>
      <div className="container mx-auto px-5 mt-3 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items && items.length > 0 ? (
            items.map((item) => (
              
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-lg"
                >
                  <Link to={`/product-view/${item.id}`}>
                  <img
                    className="w-full h-48 object-contain mb-4"
                    src={item.image}
                    alt={item.title}
                  />

</Link>
                  <h1 className="font-bold text-lg mb-2">{item.title}</h1>
                  <h2 className="font-semibold text-gray-800">
                    {item.category}
                  </h2>
                  <p className="text-gray-700 mb-2">${item.price}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {expanded[item.id]
                      ? item.description
                      : `${item.description.substring(0, 100)}... `}
                    <button
                      className=" text-blue-950 hover:underline"
                      onClick={() => toggleReadMore(item.id)}
                    >
                      {expanded[item.id] ? "Read Less" : "Read More"}
                    </button>
                    
                  </p>
                  
                </div>
             
            ))  
          ) : (
            <h1 className="col-span-full text-center text-xl font-bold">
              No Data Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
