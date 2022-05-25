import React from 'react'
import { useParams } from 'react-router-dom';
import ExploreHouse from '../components/ExploreHouse';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import explore from "../output.json";

const HouseDetails = () => {
  const {slug} = useParams()
    // console.log(explore);

    const house = explore.find((item) => item.slug === slug)
    // console.log(house)

  return (
    <div>
        <Navbar />
        <ExploreHouse house={house} />
        <Footer />
    </div>
  );
}

export default HouseDetails