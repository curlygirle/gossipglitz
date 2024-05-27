import React from "react";
import "../styles/Footer.css";

//footer component - includes all the information that is at the bottom of the page
//not much needed to be explained over here, pretty self explainatory
export default function Footer() {
  return (
    <main className="main-footer">
      <section className="footer-container">
        <section className="footer-row">
          <section className="col">
            <h4>GossipGlitz</h4>
            <ul className="list">
              <p>
                Stay connected with the pulse of high society drama at Gossip
                Glitz – your ultimate source for the latest scandals, fashion
                highlights, and social updates inspired by the world of 'Gossip
                Girl.' Join the conversation today!
              </p>
            </ul>
          </section>
          <section className="col">
            <h4>Contact Details</h4>
            <ul className="list">
              <li>24 Harper Avenue</li>
              <li>Johannesburg, South Africa</li>
              <li>+27-34-567-8901</li>
              <li>info@gossipglitz.com</li>
            </ul>
          </section>
          <section className="col">
            <h4>Usefull Links</h4>
            <ul className="list">
              <li>About</li>
              <li>Gossip</li>
              <li>Pics</li>
            </ul>
          </section>
        </section>
        <section className="footer-row">
          <p className="col-sml">
            © 2024 GossipGlitz | All rights reserved | Terms of Service |
            Privacy Policy
          </p>
        </section>
      </section>
    </main>
  );
}
