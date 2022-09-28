import React from 'react'

const ActiveImage = ({currentImage, setCurrentImage, images, num}) => {
  return (
    <>
        {currentImage === num ? (
            <div className="mb-3 border-solid border-4 border-indigo-600 m-[8px] rounded-lg">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(1)}
                src={require(`../images/${images[num]}`)}
                alt="imageOne"
              />
            </div>
          ) : (
            <div className="mb-3 m-[8px]">
              <img
                className="lg:w-[200px] w-[100px] h-[60px] lg:h-[140px] cursor-pointer "
                onClick={() => setCurrentImage(num)}
                src={require(`../images/${images[num]}`)}
                alt="imageOne"
              />
            </div>
          )}
    </>
  )
}

export default ActiveImage