import { useState } from "react";

import chevronRight from "../assets/icons/chevron-right.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";

import "../styles/slider.scss";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { title, image, caseStudyUrl } = slides[currentIndex].frontmatter;

  const styles = {
    slide: {
      backgroundImage: `url(/images/projects/${image}.webp)`,
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
      <img src={chevronRight.src} className="arrow right" onClick={next} />
      <img src={chevronLeft.src} className="arrow left" onClick={previous} />

      <a href={caseStudyUrl}>
        <div style={styles.slide} className="slide">
          <div className="slide__text">
            <h2>{title}</h2>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ImageSlider;
