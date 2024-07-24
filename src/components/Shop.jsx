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

function Shop() {
  const hoodies = [
    {
      img: hoody1,
      description: {
        price: "5000XAF",
        size: "XL",
      },
    },
    {
      img: hoody2,
      description: {
        price: "5000XAF",
        size: "XP",
      },
    },
    {
      img: hoody3,
      description: {
        price: "5000XAF",
        size: "XXL",
      },
    },
    {
      img: hoody4,
      description: {
        price: "5000XAF",
        size: "M",
      },
    },
    {
      img: hoody5,
      description: {
        price: "5000XAF",
        size: "L",
      },
    },
    {
      img: hoody6,
      description: {
        price: "5000XAF",
        size: "S",
      },
    },
    {
      img: hoody7,
      description: {
        price: "5000XAF",
        size: "XXXL",
      },
    },
    {
      img: hoody8,
      description: {
        price: "5000XAF",
        size: "XXS",
      },
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hoodies.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative h-40 w-full rounded-md border border-gray-300 overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <img
                src={item.img}
                alt={`Hoody ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-lg font-semibold flex items-center gap-2"><div className="bg-gray-500 w-1 h-1 rounded-full"/>{item.description.price}</p>
              <p className="text-sm text-gray-600 flex items-center gap-2"><div className="bg-gray-500 w-1 h-1 rounded-full"/>{item.description.size}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSegJGsKTf2PCIcAO6OrxdU3btiuCtzymetKS2e_bhHvJLPZmg/viewform?usp=sf_link"
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
