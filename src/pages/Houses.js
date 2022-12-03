import React, { useEffect } from "react";
import Housing from "../components/Housing";

const Houses = ({ dropdown, setDropdown }) => {
  useEffect(() => {
    setDropdown(!dropdown);
  }, []);
  return (
    <div className="F5F5F5">
      <Housing />
    </div>
  );
};

export default Houses;
