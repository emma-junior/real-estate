import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({exploreItem}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <Link to={`/house-details/${exploreItem.slug}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <img
                  className="lg:w-80 w-72 h-64"
                  src={require(`../images/${exploreItem.imageOne}`)}
                  alt=""
                />
                <div className="shadow-lg shadow-black-500/50 lg:w-80 w-72 h-32 relative">
                  <div className="py-7 px-3">
                    <h2 className="font-bold">$ {numberWithCommas(exploreItem.price)}</h2>
                    <h2>{exploreItem.address}</h2>
                  </div>
                  <div className="h-1 bg-indigo-700 w-full absolute bottom-0"></div>
                </div>
              </motion.div>
            </Link>
  )
}

export default Card