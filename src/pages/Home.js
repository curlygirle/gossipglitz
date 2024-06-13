//importing the necessary components
import React from "react";
import "../styles/Home.css";
import ScrollToTop from "../components/ScrollToTop";

//nothing major in this page
//this is the home page component
//also known as the landing page when you enter the website
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
