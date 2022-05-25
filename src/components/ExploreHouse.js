import React,{useState} from 'react'

const ExploreHouse = ({house}) => {
    const houseInfo  = house;
    
    const images = [houseInfo.imageOne, houseInfo.imageTwo, houseInfo.imageThree, houseInfo.imageFour];
    const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="mt-10">
      <h2 className="lg:ml-28 ml-5 mb-8 font-bold text-2xl">{houseInfo.address}</h2>
      <div className="lg:w-10/12 w-11/12 mx-auto lg:flex">
        <div className="lg:mr-5">
          <img
            className="lg:w-[860px] w-[500px] h-[280px] lg:h-[605px]"
            src={images[currentImage]}
            alt="pic"
          />
        </div>
        <div className='lg:block flex lg:-mt-2 mt-2'>
          {currentImage === 0 ? (
            <div className="mb-3 border-solid border-4 border-indigo-600 m-[8px] rounded-lg">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(0)}
                src={images[0]}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="mb-3 m-[8px]">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(0)}
                src={images[0]}
                alt="imageOne"
              />
            </div>
          )}

          {currentImage === 1 ? (
            <div className="mb-3 border-solid border-4 border-indigo-600 m-[8px] rounded-lg">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(1)}
                src={images[1]}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="mb-3 m-[8px]">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(1)}
                src={images[1]}
                alt="imageOne"
              />
            </div>
          )}

          {currentImage === 2 ? (
            <div className="mb-3 border-solid border-4 border-indigo-600 m-[8px] rounded-lg">
              <img
                className="lg:w-[200px] lg:h-[140px] w-[100px] h-[60px] cursor-pointer "
                onClick={() => setCurrentImage(2)}
                src={images[2]}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="mb-3 m-[8px]">
              <img
                className="lg:w-[200px] lg:h-[140px] w-[100px] h-[60px] cursor-pointer "
                onClick={() => setCurrentImage(2)}
                src={images[2]}
                alt="imageOne"
              />
            </div>
          )}
          {currentImage === 3 ? (
            <div className="mb-3 border-solid border-4 border-indigo-600 m-[8px] rounded-lg">
              <img
                className="lg:w-[200px] lg:h-[140px] w-[100px] h-[60px] cursor-pointer "
                onClick={() => setCurrentImage(3)}
                src={images[3]}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="mb-3 m-[5px]">
              <img
                className="lg:w-[200px] lg:h-[140px] w-[100px] h-[60px] cursor-pointer "
                onClick={() => setCurrentImage(3)}
                src={images[3]}
                alt="imageOne"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 lg:w-3/5 w-10/12 mx-auto">
        <h2 className="font-bold mb-8">Description</h2>
        <hr />
        <h2 className="mt-5 tracking-wide">{houseInfo.description}</h2>
      </div>
    </div>
  );
}

export default ExploreHouse