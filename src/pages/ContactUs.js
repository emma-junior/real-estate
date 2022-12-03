import React, { useEffect } from "react";
import Contact from "../components/Contact";

const ContactUs = ({ dropdown, setDropdown }) => {
  useEffect(() => {
    setDropdown(!dropdown);
  }, []);
  return (
    <div className="bg-[#F3F4F6] h-full">
      <Contact />
    </div>
  );
};

export default ContactUs;
