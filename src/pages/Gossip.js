import React from "react";
import "../styles/Gossip.css";
import { gossipArray } from "../components/Data";

//gossip function in the form of an array
//information here is from the data.js file
export default function Gossip() {
  return (
    <section className="gossip-heading">
      <h1>gossip</h1>
      <section className="row">
        {/* mapping through gossip array to display gossip items */}
        {gossipArray.map((gossip, index) => (
          <section className="gossipcol" key={index}>
            <h3>{gossip.title}</h3>
            <p>{gossip.information}</p>
            <img src={gossip.image} alt={gossip.title} />
          </section>
        ))}
      </section>
    </section>
  );
}
