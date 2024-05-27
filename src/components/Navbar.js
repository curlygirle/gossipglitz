import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//navbar component
export default function Navbar() {
  //using State to manage menu visibilty
  const [mobileMenu, setMobilemMenu] = useState(false);
  //function that toggles menu visibility
  const toggleMenu = () => {
    mobileMenu ? setMobilemMenu(false) : setMobilemMenu(true);
  };
  return (
    <>
      <nav className="container ">
        <img src={logo} alt="gossip glits logo" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/gossip">gossip</Link>
          </li>
          <li>
            <Link to="/posts">posts</Link>
          </li>
          <li>
            <Link to="/pics">pics</Link>
          </li>
          <li>
            <Link to="/parties">parties</Link>
          </li>
          <li>
            <Link to="/links">links</Link>
          </li>
        </ul>
        {/* used font awesome icon for this, had to use ai to help change it from an image to use font awesome */}
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>

      <Outlet />
    </>
  );
}
