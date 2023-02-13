import React from "react";
// icon
import { BsArrowRight } from "react-icons/bs";

import classes from "./AdvantageTwo.module.scss";
import Btn from "./Btn";

import Personalsituationlogo from "../../Images/Logo/personal_situationlogo.png";
import Matchinglogo from "../../Images/Logo/matchinglogo.png";
import Prioritizationlogo from "../../Images/Logo/prioritizationlogo.png";
import Preparation from "../../Images/Logo/preparation.png";
import Betterdeallogo from "../../Images/Logo/betterdeallogo.png";
import Partners from "../../Images/Logo/partners.png";
import Transitionlogo from "../../Images/Logo/transitionlogo.png";

import Discovery from "../../Images/Logo/Discovery.png";
import Matching from "../../Images/Logo/Matching.png";
import DueDiligence from "../../Images/Logo/Due-Diligence.png";

import Book from "../../Images/Background-image/Perfect_book.png";
import AmazonLogo from "../../Images/Logo/amazonlogo.png";

import Family_Financing from "../../Images/Background-image/LetsTalk-main-bg.png";
import Franchisor_financing from "../../Images/Background-image/Home_main_bg.png";

const cardList = [
  {
    img: Personalsituationlogo,
    head: "Personal Situation",
    description:
      "We take the time to understand your skills, interests, and deep underlying motivations.",
  },
  {
    img: Matchinglogo,
    head: "Matching",
    description:
      "We match you to the right brands. This is part art/part science and based on understanding people and brands. Our bias is too simple models with strong business systems and support.",
  },
  {
    img: Prioritizationlogo,
    head: "Prioritization",
    description:
      "Next, based on the quality of our franchisor relationships you are prioritized by franchisors and go right to the top of their lists.",
  },
  {
    img: Preparation,
    head: "Preparation",
    description:
      "Once introduced, we provide clear and understandable insights and tools that help you optimize each part of the due diligence What we want is for franchisors to covet you.",
  },
  {
    img: Betterdeallogo,
    head: "Get a better deal",
    description:
      "This allows us to help you negotiate a better deal from the franchisor.",
  },
  {
    img: Partners,
    head: "Elite Partners",
    description:
      "We partner you with the top financing and legal resources in franchising.",
  },
  {
    img: Transitionlogo,
    head: "Transition Plan",
    description:
      "Finding the right business is not enough. Our team helps you conceive of the best way of entering a franchise. We help you create a transition plan that generates the best results with the least amount of stress.",
  },
];

// Our Roadmap

const ourRoadmapList = [
  {
    img: Discovery,
    head: "Discovery",
    pera: "We discuss your personal, professional and financial goals; your skillset and strengths - anything that is important in launching and running a business successfully.",
  },
  {
    img: Matching,
    head: "Matching",
    pera: "We create a personal franchise business model for you and compare it to the leading franchises to identify a handful of brands that match your profile. We avoid fads, “hot brands” and businesses that are not Amazon-proof.",
  },
  {
    img: DueDiligence,
    head: "Due-Diligence",
    pera: "When you learn about all the aspects of a franchise. We will speak regularly and I will provide insights, insider info, resources and tools to help you maximize the due diligence process.",
  },
];

// Perfact Franchise

const perfactFranchiselist = [
  "In straightforward language, he explains how to: ",
  "decide whether franchising is right for you",
  "determine which franchise will optimize your chances of success",
  "conduct due diligence",
  "fund your franchise investment",
  "live the life you dream about",
];

// Latest News

const LatestNewsCard = [
  {
    img: Family_Financing,
    date: "OCT.12.2019 ",
    heading: "Friends and Family Financing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "Read more",
  },

  {
    img: Franchisor_financing,
    date: "OCT.12.2019 ",
    heading: "Franchisor financing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "Read more",
  },
];

const AdvantageTwo = () => {
  return (
    <>
      <section className={classes.advantageTwo}>
        <div className="container">
          <h1 className={classes.main_heading}>
            The Franchising Force Advantage
          </h1>
          <p className="common_pera">
            Any consultant can find you an opportunity. Our team finds our
            clients great opportunities. Here is our advantage:
          </p>
          <p className="common_pera">
            We act as educators, matchmakers, and Coaches. We save you time,
            money and optimize your chances for success. All of this is at no
            cost to you.
          </p>

          <div className={classes.cardwrap}>
            {cardList.map((item, index) => (
              <div className={classes.card} key={index}>
                <img src={item.img} alt="" />
                <h4>{item.head}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={classes.our_roadmap}>
        <div className={`${classes.our_roadmap_container} container`}>
          <div className={classes.roadmap_content}>
            <h1 className="main_heading">Our Roadmap</h1>
            <p className="gray_pera">
              The goal is to get to know you and your goals. Our team will
              provide you with guidance best fit to your lifestyle and future.
            </p>
          </div>
          <div className={classes.roadmap_cardset}>
            {ourRoadmapList.map((item, index) => (
              <div className={classes.card} key={index}>
                <div className={classes.img_wrap}>
                  <img src={item.img} alt="" />
                </div>
                <h5 className="small_heading">{item.head}</h5>
                <p className="common_pera">{item.pera}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={classes.perfact_franchise}>
        <div className={`container ${classes.perfact_franchise_wrap}`}>
          <div className={classes.perfact_franchise_content}>
            <h1 className="main_heading">
              <span>The Perfect</span>
              <span>Franchise</span>
            </h1>
            <p className="gray_pera">
              The Perfect Franchise is the one book you need to read if you are
              considering franchising.
            </p>
            <p className="gray_pera">
              Mark Schnurman is one of America’s top franchise consultants, and
              the founder of Franchising Force. Mark outlines a clear process
              for finding the perfect franchise.
            </p>

            <ul>
              {perfactFranchiselist.map((item) => (
                <li className="gray_pera">{item}</li>
              ))}
            </ul>
            <p className="common_pera">
              If you want to be your own boss, this is the book for you!
            </p>
            <div className={classes.btn_wrap}>
              <button className={classes.availablebtn}>
                <a href="">AVAILABLE AT</a>
              </button>
              <button className={classes.amazonbtn}>
                <img src={AmazonLogo} alt="" />
              </button>
            </div>
          </div>
          <div className={classes.bookimgwrap}>
            <img src={Book} alt="" />
          </div>
        </div>
      </section>

      <section className={classes.latestnews}>
        <div className={`container ${classes.latestnews_wrap}`}>
          <div className={classes.heading_wrap}>
            <h4 className="small_heading">FROM OUR BLOG</h4>
            <h1 className="main_heading">Latest news and articles</h1>
          </div>
          <div className={classes.card_wrap}>
            {LatestNewsCard.map((item, index) => (
              <div key={index} className={classes.latestnews_card}>
                <div className={classes.card_img}>
                  <img src={item.img} alt="" />
                </div>
                <div className={classes.card_body}>
                  <h4>{item.date}</h4>
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                  <div className={classes.read_more}>
                    <a href="">{item.link} <span><BsArrowRight/></span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default AdvantageTwo;
