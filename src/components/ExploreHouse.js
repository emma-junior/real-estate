import React,{useState} from 'react'
import ActiveImage from './ActiveImage';

const ExploreHouse = ({house}) => {
    const houseInfo  = house;
    
    const images = [houseInfo.imageOne, houseInfo.imageTwo, houseInfo.imageThree, houseInfo.imageFour];
    const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="mt-10">
      <h2 className="lg:ml-28 ml-5 mb-8 font-bold text-2xl">
        {houseInfo.address}
      </h2>
      <div className="lg:w-10/12 w-11/12 mx-auto lg:flex">
        <div className="lg:mr-5">
          <img
            className="lg:w-[860px] w-[500px] h-[280px] lg:h-[605px]"
            src={require(`../images/${images[currentImage]}`)}
            alt="pic"
          />
        </div>
        <div className="lg:block flex lg:-mt-2 mt-2">
          <ActiveImage currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={0}   />
          <ActiveImage currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={1}   />
          <ActiveImage currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={2}   />
          <ActiveImage currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={3}   />
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