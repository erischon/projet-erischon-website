import { useState } from "react";

import chevronRight from "../assets/icons/chevron-right.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    slider: {
      position: "relative",
      height: "100%",
    },
    slide: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(/images/projects/${slides[currentIndex].image}.webp)`,
    },
    leftArrow: {
      position: "absolute",
      top: "50%",
      //   transform: "translateY(-50%)",
      //   left: "32px",
      color: "black",
      with: "5rem",
      height: "5rem",
      backgroundColor: "white",
      zIndex: "1",
      cursor: "pointer",
    },
    rightArrow: {
      position: "absolute",
      top: "50%",
      //   transform: "translateY(-50%)",
      //   left: "32px",
      color: "black",
      with: "5rem",
      height: "5rem",
      backgroundColor: "white",
      zIndex: "1",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.slider}>
      <img src={chevronLeft.src} style={styles.leftArrow} />

      <img src={chevronRight.src} style={styles.rightArrow} />

      <div style={styles.slide}></div>
    </div>
  );
}

export default ImageSlider;
