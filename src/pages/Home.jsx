import React from "react";

import classes from "./Home.module.scss";
import btnClass from "../component/UI/Btn.module.scss";
import Btn from "../component/UI/Btn";
import AdvantageOne from "../component/UI/AdvantageOne";
import AdvantageTwo from "../component/UI/AdvantageTwo";
import Contact from "../component/Contact";

const Home = () => {

  return (
    <>
      <main className={classes.main}>
        <div className="container">
          <h1 className={`${classes.main_heading} main_heading`}>
            <span>Choosing the right</span>
            <span>franchise starts with</span>
            <span>trusted relationships.</span>
          </h1>
          <div className={classes.btn_wrap}>
            <Btn text="FREE CONSULTATION" btnClass={btnClass.lg_btn} />
          </div>
        </div>
      </main>
      <AdvantageOne/>
      <AdvantageTwo/>
    </>
  );
};

export default Home;
