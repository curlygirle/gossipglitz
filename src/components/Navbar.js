import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/gossip">gossip</NavLink>
          </li>
          <li>
            <NavLink to="/posts">posts</NavLink>
          </li>
          <li>
            <NavLink to="/pics">pics</NavLink>
          </li>
          <li>
            <NavLink to="/parties">parties</NavLink>
          </li>
          <li>
            <NavLink to="/links">links</NavLink>
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
