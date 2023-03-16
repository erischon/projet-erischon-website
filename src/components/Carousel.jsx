import { useState, useEffect } from "react";
// import { Icon } from "astro-icon";

import "../styles/_carousel.scss";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfFrame, setNumberOfFrame] = useState(children?.length);

  console.log("children", children);

  useEffect(() => {
    setNumberOfFrame(children?.length);
  }, [children]);

  const next = () => {
    if (currentIndex < numberOfFrame - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex === numberOfFrame - 1) {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }

    if (currentIndex === 0) {
      setCurrentIndex(numberOfFrame - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {numberOfFrame > 1 && (
          <button onClick={prev} className="left-arrow">
            {/* <Icon name="round-chevron-left" /> */}left
          </button>
        )}

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {children}
          </div>
        </div>

        {numberOfFrame > 1 && (
          <span className="image-number">{`${
            currentIndex + 1
          }/${numberOfFrame}`}</span>
        )}

        {numberOfFrame > 1 && (
          <button onClick={next} className="right-arrow">
            {/* <Icon name="ic:round-chevron-right" /> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
