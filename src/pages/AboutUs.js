import React, { useEffect } from "react";
import About from "../components/About";

const AboutUs = ({ dropdown, setDropdown }) => {
  useEffect(() => {
    setDropdown(!dropdown);
  }, []);
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutUs;
