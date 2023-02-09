import { NavLink } from "react-router-dom";
import React from "react";

import classes from "./Menuber.module.scss";
import MainLogo from "../Images/Logo/Home-main-logo.png";
import Btn from "./UI/Btn";
import btnClass from './UI/Btn.module.scss'

const Menuber = () => {
  return (
    <header className={classes.header}>
      <div className="container">
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
          </ul>
          <div className={classes.logo_wrap}>
            <img src={MainLogo} alt="" />
          </div>
          <ul>
            <li>
              <NavLink to="/media">Media</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="letstalk">
                <Btn text="LET'S TAlk" btnClass={btnClass.sm_btn}/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menuber;
