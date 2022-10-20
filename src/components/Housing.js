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
      <div className="h-1.5 my-7 bg-[#603276] w-32 mx-auto"></div>
      <div className="my-16 lg:grid grid-cols-3 flex flex-col justify-center lg:space-y-0 space-y-3 gap-6 lg:w-[80%] w-[300px] mx-auto ">
        {someHouses.map((exploreItem) => <Card key={exploreItem.id} exploreItem={exploreItem} />)}
      </div>
      {someHouses === coolHouse && (
        <div className='flex w-full justify-center'>
          <button
          onClick={() => setSomeHouses(houses)}
          className="border-solid border-2 border-[#603276] rounded-full px-7 py-2 hover:bg-[#603276] hover:text-white"
        >
          Load more
        </button>
        </div>
      )}
    </div>
  );
}

export default Housing