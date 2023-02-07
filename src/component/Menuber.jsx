import { NavLink } from "react-router-dom";
import React from "react";

import classes from "./Menuber.module.scss";

const Menuber = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <h3>
              <span>Franchising</span>
              <span>Force</span>
            </h3>
          </li>
          <li>
            <NavLink to="/media">Media</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="letstalk">
              <button>LET'S TALK</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menuber;
