import React from "react";
import { Link } from "react-router-dom";
import explore from "../output.json";
import { motion } from "framer-motion";
// import image from "../images/image_1a.webp";

const HomeCards = () => {
  const exploreHouse = explore.slice(0, 6);
  return (
    <div className="mt-12">
      <h2 className="text-3xl px-1 mb-12 font-bold text-center">
        Explore some of our finest properties
      </h2>
      <div className="h-1.5 my-7 bg-indigo-700 w-32 mx-auto"></div>
      <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 w-[80%] mx-auto">
        {exploreHouse.map((exploreItem) => {
          return (
            <Link to={`/house-details/${exploreItem.slug}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                key={exploreItem.id}
              >
                <img
                  className="lg:w-80 w-72 h-64"
                  src={require(`../images/${exploreItem.imageOne}`)}
                  alt=""
                />
                <div className="shadow-lg shadow-black-500/50 lg:w-80 w-72 h-32 relative">
                  <div className="py-7 px-3">
                    <h2 className="font-bold">$ {exploreItem.price}</h2>
                    <h2>{exploreItem.address}</h2>
                  </div>
                  <div className="h-1 bg-indigo-700 w-full absolute bottom-0"></div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCards;
