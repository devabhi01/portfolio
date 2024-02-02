import React, { useState, useEffect } from "react";
import styles from "./scrollToTop.module.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Set isVisible to true when scroll position is greater than a threshold (e.g., 200 pixels)
    setIsVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    isVisible && (
      <button className={styles.Btn} onClick={scrollToTop}>
        <svg height="1.2em" className={styles.arrow} viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
        <p className={styles.text}>Scroll to Top</p>
      </button>
    )
  );
}

export default ScrollToTop;
