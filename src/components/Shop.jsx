import React from "react";
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
  // Define the hoodies array with all images
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
  console.log(hoodies);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center">
        {hoodies.map((item, index) => (
          <div
            key={index}
            className="h-40 w-full md:w-40 rounded-md border border-gray-400 overflow-hidden transition-all duration-300"
          >
            <img
              src={item}
              alt={`Hoody ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
