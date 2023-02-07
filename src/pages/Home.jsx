import React from "react";
import Menuber from "../component/Menuber";

import classes from "./Home.module.scss";
import btnClass from "../component/UI/Btn.module.scss"
import Footer from "../component/Footer";
import Btn from "../component/UI/Btn";

const Home = () => {
  return (
    <div>
      <main>
        <div className="container">
          <Menuber />
          <h2 className={classes.main_heading}>
            <span>Choosing the right</span>
            <span>franchise starts with</span>
            <span>trusted relationships.</span>
          </h2>
          <div className={classes.btn_wrap}>
            <Btn text="FREE CONSULTATION" btnClass={btnClass.lg_btn}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
