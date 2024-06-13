import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

export default function BackButton() {
  const history = useNavigate();
  return (
    <section>
      <button className="button" onClick={() => history(-1)}>
        Back
      </button>
    </section>
  );
}
