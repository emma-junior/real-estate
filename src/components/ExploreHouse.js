import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ActiveImage from "./ActiveImage";

const ExploreHouse = ({ house }) => {
  const houseInfo = house;

  const images = [
    houseInfo.imageOne,
    houseInfo.imageTwo,
    houseInfo.imageThree,
    houseInfo.imageFour,
  ];
  const [currentImage, setCurrentImage] = useState(0);
  console.log(houseInfo.latitude, houseInfo.longitude);
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
          <ActiveImage
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            images={images}
            num={0}
          />
          <ActiveImage
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            images={images}
            num={1}
          />
          <ActiveImage
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            images={images}
            num={2}
          />
          <ActiveImage
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            images={images}
            num={3}
          />
        </div>
      </div>
      <section className="mt-16 lg:w-3/5 w-10/12 mx-auto">
        <h2 className="font-bold mb-8">Description</h2>
        <hr />
        <h2 className="mt-5 tracking-wide">{houseInfo.description}</h2>
      </section>
      <section>
        <h2 className="text-[#603276] text-[25px] font-medium lg:w-3/5 w-10/12 mx-auto mt-10 mb-4">
          Location on Map
        </h2>
        <div>
          <MapContainer
            center={[houseInfo.latitude, houseInfo.longitude]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[houseInfo.latitude, houseInfo.longitude]}>
              <Popup>
                <div>
                  <h2>{houseInfo.address}</h2>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default ExploreHouse;
