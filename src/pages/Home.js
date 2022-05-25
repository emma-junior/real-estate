import React from 'react'
import Footer from '../components/Footer';
import HomeCards from '../components/HomeCards';
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="bg-[url(https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)] bg-cover h-screen">
        <h2 className="lg:text-5xl text-2xl font-bold text-[#222] lg:w-3/5 w-4/5 lg:pl-10 pl-5 lg:pt-16 pt-24">
          Your No.1 plug for all your housing needs anywhere in Nigeria
        </h2>
        <div className="h-1.5 my-7 bg-indigo-700 w-32 ml-5"></div>
      </div>
      <div className='bg-[#111] py-10 text-white text-center'>
        <h2 className='text-3xl text-indigo-700 mb-8'>Mercury Homes</h2>
        <h2 className='lg:text-4xl text-2xl font-bold w-4/5 lg:ml-24 ml-8 mb-6'>The Largest And Biggest Real Estate Company For Home Owners And Buyers In Nigeria</h2>
        <h2 className='text-2xl mb-4'>We Make The Incredible Affordable</h2>
        <h2 className='px-2'>Let us make you start your journey to becoming a property owner today.</h2>
      </div>
      <HomeCards />
      <Footer />
    </div>
  );
}

export default Home