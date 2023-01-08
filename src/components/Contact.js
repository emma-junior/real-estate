import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-12 lg:flex mx-auto w-11/12 justify-center ">
      <div className="bg-contact-img lg:w-4/12 bg-cover text-white ">
        <div className="overlay px-10 pt-10 pb-28">
          <div>
            <h2 className="font-bold text-xl">Contact Information</h2>
            <p className="py-8">
              Contact us to get the best deals on your housing needs at an
              affordable price anywhere in nigeria
            </p>
            <h2 className="flex">
              <p className="mr-4  text-2xl">
                <BsTelephone />
              </p>
              <p>090565356787</p>
            </h2>
            <h2 className="flex py-5">
              <p className="mr-4 mt-1 text-2xl">
                <HiOutlineMail />
              </p>
              <p>mercuryhomes@gmail.com</p>
            </h2>
            <div className="flex space-x-8 pt-3">
              <h2 className="text-3xl">
                <AiFillFacebook />
              </h2>
              <h2 className="text-3xl">
                <AiFillInstagram />
              </h2>
              <h2 className="text-3xl">
                <FaTwitterSquare />
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className=" lg:w-6/12 bg-white shadow-lg shadow-black-500/50 py-5">
        <div className="lg:px-12 px-8">
          <h2 className="text-xl font-bold">Send us a message</h2>
          <div className="my-5 ">
            <label className=" font-bold">First name:</label>
            <input className="w-full h-10 rounded-md border-solid border-[#666] border-2 px-2" />
          </div>
          <div className="my-5 ">
            <label className=" font-bold">Last name:</label>
            <input className="w-full h-10 rounded-md border-solid border-[#666] border-2 px-2" />
          </div>
          <div className="my-5 ">
            <label className=" font-bold">Email:</label>
            <input className="w-full h-10 rounded-md border-solid border-[#666] border-2 px-2" />
          </div>
          <div className="my-5 ">
            <label className=" font-bold">Message:</label>
            <textarea className="w-full h-20 rounded-md border-solid border-[#666] border-2 px-2" />
          </div>
          <div className="flex justify-end">
            <button className="bg-[#603276] text-white py-2 px-4 rounded-lg hover:bg-[#9650b6] ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
