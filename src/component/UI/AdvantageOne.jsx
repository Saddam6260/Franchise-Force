import React from "react";
// Icon
import { FaCheck } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

// Component
import Btn from "./Btn";
import btnClass from "./Btn.module.scss";
import CoachLogo from "../../Images/Logo/CoachLogo.png";
import PlaningLogo from "../../Images/Logo/PlaningLogo.png";
import DiligenceLogo from "../../Images/Logo/DiligenceLogo.png";
import ServicesLogo from "../../Images/Logo/ServicesLogo.png";
import classes from "./AdvantageOne.module.scss";

// Object And Variable
const AdventageList = [
  { text: "We act as educators, matchmakers and coaches" },
  { text: "We save you time, money and optimize your chances for success." },
  { text: "More leading brands than anyone else" },
  { text: "Comprehensive 3 step matching process" },
  { text: "Funding options guidance" },
  { text: "All of this is at no cost to you" },
];

const homeAdvantagePera =
  "Finding the Right franchise is not simple, The franchising force advantage is the powerful differentiator. We follow a comprehensive matching process that ensures that you choose the best franchise for you.";

const cardList = [
  {
    logo: CoachLogo,
    head: "Your Personal Franchise Coach",
    description: "Get expert info on what's right for you",
  },
  {
    logo: PlaningLogo,
    head: "Franchise Planning",
    description: "Ensure you transition smoothly into business ownership",
  },
  {
    logo: DiligenceLogo,
    head: "Due Diligence",
    description: "Advice and support as you learn about franchising",
  },
  {
    logo: ServicesLogo,
    head: "Value-Added Services",
    description:
      "Referrals to leading franchise professionals such as attorneys and funding resources",
  },
];

const AdvantageOne = () => {
  return (
    <section className={classes.adventage}>
      <div className={`container ${classes.contentwrap}`}>
        <div className={classes.advantageleft}>
          <h1 className="main_heading">
            <span>The Franchising</span>
            <span>Force Advantage</span>
          </h1>
          <p className="gray_pera">{homeAdvantagePera}</p>
          <ul>
            {AdventageList.map((item, index) => (
              <li key={index}>
                <span>
                  <FaCheck />
                </span>
                <p>{item.text}</p>
              </li>
            ))}
            <Btn text="VIEW MORE" btnClass={btnClass.lg_btn} className={classes.viewbtn}/>
          </ul>
        </div>
        <div className={classes.advantageright}>
          {cardList.map((item, index) => (
            <div className={classes.card_wrap} key={index}>
              <div>
                <img src={item.logo} alt="" />
              </div>
              <p>{item.head}</p>
              <p className="gray_pera">{item.description}</p>
              <HiArrowNarrowRight className={classes.rightArrow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageOne;
