import { useState } from "react";

import chevronRight from "../assets/icons/chevron-right.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";

import "../styles/slider.scss";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    slide: {
      backgroundImage: `url(/images/projects/${slides[currentIndex].image}.webp)`,
    },
  };

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider">
      <img src={chevronLeft.src} className="arrow left" onClick={previous} />
      <img src={chevronRight.src} className="arrow right" onClick={next} />

      <div style={styles.slide} className="slide">
        <a href={slides[currentIndex].caseStudyUrl}>
          <div className="slide__text">
            <h2>{slides[currentIndex].title}</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ImageSlider;
