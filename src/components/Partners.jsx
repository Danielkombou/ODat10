import React from "react";
import {
  image2,
  image10,
  image11,
  image12,
  image13,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image3,
} from "../assets/Images";
import { Link } from "react-router-dom";

function Partners() {
  const images = [
    image2,
    image4,
    image5,
    image6,
    image3,
    image8,
    image7,
    image12,
    image9,
    image10,
    image11,
    image13,
  ];
  return (
    <div className="pb-4">
      <div className="lg:flex flex-col font-sans">
        <div className="mb-6">
          <h1 className="text-gray-900 text-custom-32">Partners</h1>
        </div>

        {/* Desktop view */}
        <div className="hidden gap-4 lg:gap-8 lg:grid">
          <div className="grid grid-cols-auto-fit-minmax md:grid-cols-4 gap-4">
            <img src={image2} className="w-40" alt="Partner 1" />
            <img src={image4} className="w-40" alt="Partner 2" />
            <img src={image5} className="w-40" alt="Partner 3" />
            <img src={image6} className="w-40" alt="Partner 4" />
          </div>

          <div className="grid grid-cols-2 mx-auto  p-4 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <img src={image3} className="w-40" alt="Partner 5" />
            <img src={image8} className="w-40" alt="Partner 6" />
            <img src={image7} className="w-40" alt="Partner 7" />
          </div>

          <div className="flex flex-col md:flex-row justify-between md:grid-cols-auto-fit-minmax gap-4">
            <img src={image12} className="w-40" />
            <div className="flex gap-[63px] flex-col md:flex-row">
              <img src={image9} className="w-40" alt="Partner 8" />
              <img src={image10} className="w-40" alt="Partner 9" />
            </div>
            <img src={image11} className="w-40" alt="Partner 10" />
          </div>
          <div className="mt-4">
            <img src={image13} className="w-40" alt="Partner 11" />
          </div>
        </div>

        {/* Mobile view */}
        <div className="grid lg:hidden grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div className="flex items-center justify-center h-40" key={index}>
              <img src={image} />
            </div>
          ))}
        </div>
        {/* Link to  */}
        <div className="flex justify-center mt-6">
          <Link
            to="https://www.open-dreams.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-full py-3 px-10 text-white font-medium text-base hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Partners;
