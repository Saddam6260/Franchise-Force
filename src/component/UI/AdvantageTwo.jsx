import React from "react";

import classes from "./AdvantageTwo.module.scss";

const cardList = [
  {
    head: "Personal Situation",
    description:
      "We take the time to understand your skills, interests, and deep underlying motivations.",
  },
  {
    head: "Matching",
    description:
      "We match you to the right brands. This is part art/part science and based on understanding people and brands. Our bias is too simple models with strong business systems and support.",
  },
  {
    head: "Prioritization",
    description:
      "Next, based on the quality of our franchisor relationships you are prioritized by franchisors and go right to the top of their lists.",
  },
  {
    head: "Preparation",
    description:
      "Once introduced, we provide clear and understandable insights and tools that help you optimize each part of the due diligence What we want is for franchisors to covet you.",
  },
  {
    head: "Get a better deal",
    description:
      "This allows us to help you negotiate a better deal from the franchisor.",
  },
  {
    head: "Elite Partners",
    description:
      "We partner you with the top financing and legal resources in franchising.",
  },
  {
    head: "Transition Plan",
    description:
      "Finding the right business is not enough. Our team helps you conceive of the best way of entering a franchise. We help you create a transition plan that generates the best results with the least amount of stress.",
  },
];

// Our Roadmap

const ourRoadmapList = [
  {
    img: "Logo",
    head: "Discovery",
    pera: "We discuss your personal, professional and financial goals; your skillset and strengths - anything that is important in launching and running a business successfully.",
  },
  {
    img: "Logo",
    head: "Matching",
    pera: "We create a personal franchise business model for you and compare it to the leading franchises to identify a handful of brands that match your profile. We avoid fads, “hot brands” and businesses that are not Amazon-proof.",
  },
  {
    img: "Logo",
    head: "Due-Diligence",
    pera: "When you learn about all the aspects of a franchise. We will speak regularly and I will provide insights, insider info, resources and tools to help you maximize the due diligence process.",
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
                <h4>{item.head}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={classes.our_roadmap}>
        <div className="container">
          <div>
            <h1 className="main_heading">Our Roadmap</h1>
            <p className="gray_pera">
              The goal is to get to know you and your goals. Our team will
              provide you with guidance best fit to your lifestyle and future.
            </p>
          </div>
          <div>
            {ourRoadmapList.map((item, index) => (
              <div className="card" key={index}>
                <img src="" alt="" />
                <h5>{item.head}</h5>
                <p>{item.pera}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvantageTwo;
