//importing the necessary components
import React from "react";
import "../styles/Gossip.css";
import { gossipArray } from "../components/Data";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import Search from "../components/Search";

//gossip function in the form of an array
//information here is from the data.js file
export default function Gossip() {
  //using state to create a serach function
  //to help filter through gossip
  const [search, setSearch] = useState("");

  //this function handles the search input
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //filters through the information provided based on the search
  //the search applies to the title of the gossip as well as the information of the gossip
  const filteredGossip = gossipArray.filter((gossip) => {
    return (
      gossip.title.toLowerCase().includes(search.toLowerCase()) ||
      gossip.information.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="gossip-heading">
      <h1>gossip</h1>
      {/* implementing a search item and having it display on top of the page */}
      <Search searchTerm={search} handleSearch={handleSearch} />
      <section className="row">
        {/* mapping through gossip array to display gossip items */}
        {filteredGossip.map((gossip, index) => (
          <section className="gossipcol" key={index}>
            <h3>{gossip.title}</h3>
            <p>{gossip.information}</p>
            <img src={gossip.image} alt={gossip.title} />
          </section>
        ))}
      </section>
      <ScrollToTop />
    </section>
  );
}
