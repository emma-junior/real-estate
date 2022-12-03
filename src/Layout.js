import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ dropdown, setDropdown }) => {
  return (
    <div>
      <Navbar dropdown={dropdown} setDropdown={setDropdown} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
