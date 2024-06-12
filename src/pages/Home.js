import React from "react";
import "../styles/Home.css";
import ScrollToTop from "../components/ScrollToTop";

//nothing major in this page
//this is the home page component
export default function Home() {
  return (
    <main className="header-1 container">
      <section className="header-text">
        <h1>gossip glitz</h1>
        <p>where stories sparkle and secrets shine</p>
      </section>
      <ScrollToTop />
    </main>
  );
}
