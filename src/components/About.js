import React from "react";
import aboutImg from "../asset/aboutpg.jpg";
import placeholderImg from "../asset/about-placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <>
      <h2 className="text-[40px] lg:text-[50px] w-10/12 lg:w-3/5 text-center mx-auto font-medium mt-5">
        We're changing the whole real estate game
      </h2>
      <div className="my-4 space-x-3 flex w-full justify-center">
        <button className="bg-[#603276] text-white py-2 px-4 lg:py-3 lg:px-6 rounded-full font-medium hover:border-solid border-2 border-[#603276] hover:text-[#603276] hover:bg-white">
          Get Started
        </button>
        <button className="text-[#603276] border-solid border-2 border-[#603276] rounded-full py-2 px-4 lg:py-3 lg:px-6 font-medium hover:bg-[#603276] hover:text-white">
          View Pricing
        </button>
      </div>
      <LazyLoadImage
        className="w-11/12 h-[60vh] mx-auto object-cover "
        src={aboutImg}
        placeholderSrc={placeholderImg}
        effect="blur"
        alt=""
      />
    </>
  );
};

export default About;
