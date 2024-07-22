import React from "react";
import { Link } from "react-router-dom";
import hoody1 from "../assets/hoody/hoody1.jpg";
import hoody2 from "../assets/hoody/hoody2.jpg";
import hoody3 from "../assets/hoody/hoody3.jpg";
import hoody4 from "../assets/hoody/hoody4.jpg";
import hoody5 from "../assets/hoody/hoody5.jpg";
import hoody6 from "../assets/hoody/hoody6.jpg";
import hoody7 from "../assets/hoody/hoody7.jpg";
import hoody8 from "../assets/hoody/hoody8.jpg";
// import hoody9 from "../assets/hoody/hoody9.jpg";
// import hoody10 from "../assets/hoody/hoody10.jpg";
// import hoody11 from "../assets/hoody/hoody11.jpg";

function Shop() {
  const hoodies = [
    hoody1,
    hoody2,
    hoody3,
    hoody4,
    hoody5,
    hoody6,
    hoody7,
    hoody8,
    // hoody9,
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hoodies.map((item, index) => (
          <div
            key={index}
            className="relative h-40 w-full rounded-md border border-gray-300 overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={item}
              alt={`Hoody ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link
          to="/order"
          aria-label="Order now"
          className="font-semibold hover:text-blue-700 hover:bg-gray-100 transition duration-300 ease-in-out rounded-sm bg-slate-100 p-3 text-blue-500 text-base md:text-lg"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default Shop;
