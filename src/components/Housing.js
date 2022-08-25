import React, { useState } from 'react'
import houses from '../output.json'
import Card from './Card';

const Housing = () => {
    const coolHouse = houses.slice(0, 9)
    const [someHouses, setSomeHouses] = useState(coolHouse)
  return (
    <div className="mt-12">
      <h2 className="text-4xl mb-12 font-bold text-center">
        Available properties
      </h2>
      <div className="h-1.5 my-7 bg-indigo-700 w-32 mx-auto"></div>
      <div className="my-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 w-[80%] mx-auto ">
        {someHouses.map((exploreItem) => <Card key={exploreItem.id} exploreItem={exploreItem} />)}
      </div>
      {someHouses === coolHouse && (
        <button
          onClick={() => setSomeHouses(houses)}
          className="border-solid border-2 border-indigo-600 rounded-full px-7 py-2 items-center lg:ml-[550px] ml-24 hover:bg-slate-100"
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default Housing