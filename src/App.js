import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseDetails from "./pages/HouseDetails";
import ScrollToTop from "./components/ScrollToTop";
import Houses from "./pages/Houses";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="houses" element={<Houses />} />
          <Route path="house-details/:slug" element={<HouseDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
