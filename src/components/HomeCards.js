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
      <div className="h-1.5 my-7 bg-[#603276] w-32 mx-auto"></div>
      <div className="mt-16 lg:grid grid-cols-3 flex flex-col justify-center lg:space-y-0 space-y-3 gap-6 lg:w-[80%] w-[300px] mx-auto">
        {exploreHouse.map((exploreItem) => <Card key={exploreItem.id} exploreItem={exploreItem} />)}
      </div>
    </div>
  );
};

export default HomeCards;
