//importing all the needed components
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/ScrollToTop.css";

//scroll to the top functions
//enables a button to appear on the page so that users are able to click it and scroll to the top (easily)
export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  //show the button when user scrolls down to a certain point
  useEffect(() => {
    const toggleShow = () => {
      if (window.pageYOffset > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleShow);
    return () => window.removeEventListener("scroll", toggleShow);
  }, []);

  //clicking the button that allows you to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`scroll-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </section>
  );
}
