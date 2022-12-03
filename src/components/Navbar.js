import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ dropdown, setDropdown }) => {
  return (
    <section className="bg-[#603276] py-5 lg:px-16 px-4 text-white">
      <div className="flex justify-between w-full">
        <NavLink to="/">
          <h2 className="text-xl lg:text-2xl font-bold animate__animated animate__zoomIn">
            MERCURY HOMES
          </h2>
        </NavLink>

        {/* For Mobile View */}
        {dropdown === false && (
          <h2
            className=" text-2xl lg:hidden "
            onClick={() => setDropdown(true)}
          >
            <FaBars />
          </h2>
        )}
        {dropdown === true && (
          <div>
            <h2
              className=" text-2xl lg:hidden"
              onClick={() => setDropdown(false)}
            >
              <FaTimes />
            </h2>
          </div>
        )}

        {/* For Laptop View */}
        <ul className="hidden lg:flex space-x-5 animate__animated animate__slideInRight">
          <NavLink
            to="/houses"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li>Houses</li>
          </NavLink>

          {/* <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li className="cursor-pointer">Information</li>
          </NavLink> */}
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li className="cursor-pointer">Contact Us</li>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li>About Us</li>
          </NavLink>
        </ul>
      </div>

      {dropdown && (
        <ul className="block lg:hidden mx-auto text-center mt-16 mb-6 text-xl">
          <NavLink
            to="/houses"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li className="cursor-pointer mt-4">Houses</li>
          </NavLink>
          {/* <NavLink to="">
            <li className="cursor-pointer mt-4">Information</li>
          </NavLink> */}
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li className="cursor-pointer mt-4">Contact Us</li>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-slate-200 cursor-pointer"
            }
          >
            <li className="cursor-pointer mt-4">About Us</li>
          </NavLink>
        </ul>
      )}
    </section>
  );
};

export default Navbar;
