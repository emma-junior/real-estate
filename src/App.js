import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetails from "./pages/HouseDetails";
import ScrollToTop from "./components/ScrollToTop";
import Houses from "./pages/Houses";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="houses" element={<Houses />} />
            <Route path="house-details/:slug" element={<HouseDetails />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
