import React from "react";

import { BsArrowRight } from "react-icons/bs";
import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
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
        <div className={classes.link_wrap}>
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
