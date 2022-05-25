import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-[#111] lg:flex mt-10 py-12 lg:px-28 px-5">
      <div className=" text-white pr-8 mb-5 lg:mb-[4px]">
        <h2 className='text-indigo-700 text-3xl font-bold mb-5'>MERCURY HOMES</h2>
        <h2 className='text-3xl mb-5'>About Mercury</h2>
        <p>
          We are daily driven to keeping our promise of delivering the best
          houses at affordable prices
        </p>
      </div>
      <div className='text-white pr-8'>
        <h2 className='text-3xl mb-5'>Contact Us</h2>
        <p className='mb-3'>
          For Complaints and enquiries you can reach us on any of the numbers or
          visit our head office at:
        </p>
        <p className='mb-3'>95B Abimbola, Williams phase 1, Surulere, Lagos state</p>
        <p>Email us: mercury@gmail.com</p>
      </div>
      <div className='text-white mt-5 flex lg:block'>
        <div className='flex mb-5 mr-4 cursor-pointer'>
          <p className='mr-2 lg:text-2xl'>Facebook</p>
          <p className='mt-1 lg:text-3xl text-indigo-700'><FaFacebook /></p>
        </div>
        <div className='flex mb-5 mr-4 cursor-pointer'>
          <p className='mr-2 lg:text-2xl'>Instagram</p>
          <p className='mt-1 lg:text-3xl text-indigo-700 '><FaInstagram /></p>
        </div>
        <div className='flex mb-5 mr-4 cursor-pointer'>
          <p className='mr-2 lg:text-2xl'>Twitter</p>
          <p className='mt-1 lg:text-3xl text-indigo-700'><FaTwitter /></p>
        </div>
      </div>
    </div>
  );
}

export default Footer