import React from "react";
import "../styles/About.css";
import aboutimage1 from "../images/about1.jpg";
import aboutimage2 from "../images/about2.jpg";

//about page component
export default function About() {
  return (
    //main section for the about page
    <section className="about-heading">
      <h1>about</h1>
      <main className="about-content">
        {/* content section  striclty what must appear on the left */}
        <section className="about-section about-left">
          <img src={aboutimage1} alt="about" />
          <div className="about-text">
            <h3>what is gossip glitz?</h3>
            <p>
              Gossip Glitz is a website inspired by the 2007 television series
              known as ‘Gossip Girl’. The aim of this platform is to capture the
              essence of the show's intriguing world of high society, secrets,
              and drama, offering readers a captivating blend of news, fashion
              highlights, and social updates on our fellow upper east siders.
              Whether you're looking for the latest scandal, or to simply keep
              other readers up to date by posting the latest scandal, Gossip
              Glitz is your go-to source.
            </p>
          </div>
        </section>
        {/* content section  striclty what must appear on the right */}
        <section className="about-section about-right">
          <img src={aboutimage2} alt="about" />
          <div className="about-text2">
            <h3>how to use it?</h3>
            <p>
              Navigate to the Gossip Page to catch up on the latest scandals and
              social updates, or head to the Links Page to submit your own juicy
              gossip for consideration. Engage with the community through
              comments, likes, and shares, and stay connected to the pulse of
              high society drama. Whether you're seeking the latest scoop or
              eager to contribute to the gossip mill, Gossip Glitz offers a
              stylish and immersive experience for all gossip enthusiasts.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
}
