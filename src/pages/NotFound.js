import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import ScrollToTop from "../components/ScrollToTop";

export default function NotFound() {
  return (
    <section className="notf-heading">
      <h1>404 - errror</h1>
      <section className="notf-col">
        <h4>Page not found</h4>
        <p>
          Oops! It looks like you have stumbled upon a page that doesn't exist.
          Please check the URL and try again, or navigate back to the homepage
          or any page using the navigation bar above.
        </p>
        <p>
          Or click the links below:
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="gossip">Gossip</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="pics">Pics</Link>
          </li>
          <li>
            <Link to="parties">Parties</Link>
          </li>
          <li>
            <Link to="links">Links</Link>
          </li>
        </p>
      </section>
      <ScrollToTop />
    </section>
  );
}
