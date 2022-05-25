import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div className="bg-indigo-700 py-5 px-4 text-white flex">
      <Link to="/">
        <h2 className="text-xl lg:text-2xl font-bold lg:mr-[500px]">
          MERCURY HOMES
        </h2>
      </Link>

      {/* For Mobile View */}
      {dropdown === false && (
        <h2
          className=" text-2xl absolute lg:hidden top-[23px] left-[300px]"
          onClick={() => setDropdown(true)}
        >
          <FaBars />
        </h2>
      )}
      {dropdown === true && (
        <h2
          className=" text-2xl absolute lg:hidden top-[23px] left-[300px]"
          onClick={() => setDropdown(false)}
        >
          <FaTimes />
        </h2>
      )}
      {dropdown && (
        <ul className="block lg:hidden -ml-16 text-center mt-16 mb-6 text-xl">
          <Link to="/houses">
            <li className="cursor-pointer mt-4">Houses</li>
          </Link>
          <Link to="">
            <li className="cursor-pointer mt-4">Information</li>
          </Link>
          <Link to="/contact-us">
            <li className="cursor-pointer mt-4">Contact Us</li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer mt-4">About Us</li>
          </Link>
        </ul>
      )}

      {/* For Laptop View */}
      <ul className="hidden lg:flex">
        <div className="flex">
          <Link to="/houses">
            <li className="cursor-pointer flex mr-5">Houses</li>
          </Link>
        </div>
        {/* <li className="cursor-pointer">Estates</li>
        <span className="mr-6 mt-1 ml-2">
          <FaCaretDown />
        </span> */}
        <li className="mr-5 cursor-pointer">Information</li>
        <Link to="/contact-us">
          <li className="mr-5 cursor-pointer">Contact Us</li>
        </Link>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navbar