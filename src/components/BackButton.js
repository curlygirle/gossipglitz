//importing the necessary components from React and ReactDOM
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css"; //importing the styling component to be use

//establishing a back button function
//alows you to go back to the previous page
//only used in the posts pages
export default function BackButton() {
  const history = useNavigate();
  return (
    <section>
      {/* this event allows you to navigate back by 1 page hence history - 1 */}
      <button className="button" onClick={() => history(-1)}>
        Back
      </button>
    </section>
  );
}
