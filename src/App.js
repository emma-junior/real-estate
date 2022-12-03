import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetails from "./pages/HouseDetails";
import ScrollToTop from "./components/ScrollToTop";
import Houses from "./pages/Houses";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";

function App() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Layout dropdown={dropdown} setDropdown={setDropdown} />}
          >
            <Route
              index
              element={<Home dropdown={dropdown} setDropdown={setDropdown} />}
            />
            <Route
              path="houses"
              element={<Houses dropdown={dropdown} setDropdown={setDropdown} />}
            />
            <Route
              path="house-details/:slug"
              element={
                <HouseDetails dropdown={dropdown} setDropdown={setDropdown} />
              }
            />
            <Route
              path="contact-us"
              element={
                <ContactUs dropdown={dropdown} setDropdown={setDropdown} />
              }
            />
            <Route
              path="about-us"
              element={
                <AboutUs dropdown={dropdown} setDropdown={setDropdown} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
