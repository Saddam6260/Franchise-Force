import React from "react";

import { BsArrowRight } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import MainLogo from "../Images/Logo/Home-main-logo.png";
import Ifpg_member_log from "../Images/Logo/Ifpg_member_log.png";
import Forbes from "../Images/Logo/Forbes.png";
import classes from "./Contact.module.scss";

const pagesList = [
  {
    Company: "Company",
    About: "About",
    Service: "Services",
    Contactus: "Contact Us",
    Services: "Services",
    Expert: "Expert Advantage",
    Franchise: "Franchise Matching",
    Brand: "Brand Scope",
    Financing: "Financing",
  },
];

const Contact = () => {
  return (
    <>
      <section className={classes.contact}>
        <div className="container">
          <div className={classes.contact_wrap}>
            <div className={classes.left_content}>
              <div className={classes.imgwrap}>
                <img src={MainLogo} alt="" />
              </div>
              <div className={classes.phone_wrap}>
                <span>
                  <FiPhoneCall />
                </span>
                <p>1 973-452-4558</p>
              </div>
              <div className={classes.contact_logo}>
                <div className={classes.logo_wrap}>
                  <img src={Ifpg_member_log} alt="" />
                </div>
                <div className={classes.logo_wrap}>
                  <img src={Forbes} alt="" />
                </div>
              </div>
            </div>
            {pagesList.map((item, index) => (
              <div className={classes.middle_content}>
                <ul key={index}>
                  <li>{item.Company}</li>
                  <li>{item.About}</li>
                  <li>{item.Service}</li>
                  <li>{item.Contactus}</li>
                </ul>
                <ul>
                  <li>{item.Services}</li>
                  <li>{item.Expert}</li>
                  <li>{item.Franchise}</li>
                  <li>{item.Brand}</li>
                  <li>{item.Financing}</li>
                </ul>
              </div>
            ))}
            <div className={classes.right_content}>
              <div className={classes.input_wrap}>
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </div>
              <p>
                Join our newsletter to stay up to date on features and releases
              </p>
              <div className={classes.social_wrap}>
                <div className={classes.social}>
                  <ImFacebook/>
                </div>
                <div className={classes.social}>
                  <AiFillYoutube/>
                </div>
                <div className={classes.social}>
                  <ImLinkedin2/>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.contact_bottom}>
            <div>
              <p>©2022 Franchising Force. All rights reserved</p>
            </div>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Term Of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className={classes.next_page}>
          <a href="">NEXT PAGE</a>
          <span>
            <BsArrowRight />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Contact;
