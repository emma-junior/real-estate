import React from "react";
import { useParams } from "react-router-dom";
import ExploreHouse from "../components/ExploreHouse";
import explore from "../output.json";

const HouseDetails = () => {
  const { slug } = useParams();

  const house = explore.find((item) => item.slug === slug);

  return (
    <div>
      <ExploreHouse house={house} />
    </div>
  );
};

export default HouseDetails;
