import React from "react";
import explore from "../output.json";
import Card from "./Card";

const HomeCards = () => {
  const exploreHouse = explore.slice(0, 6);
  return (
    <div className="mt-12">
      <h2 className="text-3xl px-1 mb-12 font-bold text-center">
        Explore some of our finest properties
      </h2>
      <div className="h-1.5 my-7 bg-indigo-700 w-32 mx-auto"></div>
      <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 w-[80%] mx-auto">
        {exploreHouse.map((exploreItem) => <Card key={exploreItem.id} exploreItem={exploreItem} />)}
      </div>
    </div>
  );
};

export default HomeCards;
