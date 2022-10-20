import React from "react";
import Footer from "../components/Footer";
import HomeCards from "../components/HomeCards";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-cover-pic bg-cover bg-no-repeat bg-center h-screen" >
        <h2 className="lg:text-5xl text-2xl font-bold text-white lg:w-3/5 w-4/5 lg:pl-10 pl-5 lg:pt-16 pt-24">
          Your No.1 plug for all your housing needs anywhere in Nigeria
        </h2>
        <div className="h-1.5 my-7 bg-[#603276] w-32 lg:ml-10 ml-5"></div>
      </div>
      <div className="bg-[#111] py-10 text-white text-center">
        <h2 className="text-3xl text-[#603276] mb-8">Mercury Homes</h2>
        <h2 className="lg:text-4xl text-2xl font-bold w-4/5 lg:ml-24 ml-8 mb-6">
          The Largest And Biggest Real Estate Company For Home Owners And Buyersss
          In Nigeria
        </h2>
        <h2 className="text-2xl mb-4">We Make The Incredible Affordable</h2>
        <h2 className="px-2">
          Let us make you start your journey to becoming a property owner today.
        </h2>
      </div>
      <HomeCards />
      <Footer />
    </div>
  );
};

export default Home;
