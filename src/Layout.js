import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <Navbar dropdown={dropdown} setDropdown={setDropdown} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
