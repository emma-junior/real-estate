import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import houses from '../output.json'

const Housing = () => {
    const coolHouse = houses.slice(0, 9)
    const [someHouses, setSomeHouses] = useState(coolHouse)
    // const Houses = houses.slice(0, 9)
  return (
    <div className="mt-12">
      <h2 className="text-4xl mb-12 font-bold text-center">
        Available properties
      </h2>
      <div className="h-1.5 my-7 bg-indigo-700 w-32 mx-auto"></div>
      <div className="my-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 w-[80%] mx-auto ">
        {someHouses.map((exploreItem) => {
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
      {someHouses === coolHouse && (
        <button
          onClick={() => setSomeHouses(houses)}
          className="border-solid border-2 border-indigo-600 rounded-full px-7 py-2 items-center lg:ml-[550px] ml-24 hover:bg-slate-100"
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default Housing