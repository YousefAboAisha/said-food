import React, { useEffect } from "react";
import styled from "styled-components";
import icon1 from "../Media/icon1.png";
import icon2 from "../Media/icon2.png";
import icon3 from "../Media/icon3.png";
import WOW from "wow.js";

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;

  & div {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 330px;
    height: 318px;
    background-color: #ffffff;
    box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    flex: 1 1 auto;

    @media screen and (max-width: 500px) {
      & {
        width: 95%;
      }
    }

    & img {
      margin-bottom: 34px;
    }

    & p {
      width: 90%;
      text-align: center;
      color: #1e1e1e;
      font-weight: 500;
    }
  }
`;

const arr = [
  {
    icon: icon1,
    title: "Increase Number of Food Orders",
    animate: "wow fadeInLeft",
  },
  {
    icon: icon2,
    title: "Don’t Pay Third-PartyCommissions",
    animate: "wow fadeInUp",
  },
  {
    icon: icon3,
    title: "Increasing Customer Satisfaction with Ordering",
    animate: "wow fadeInRight",
  },
];

const Cards = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });

  return (
    <Box>
      {arr.map((elem, index) => {
        return (
          <div
            key={index}
            className={`${elem.animate} data-wow-duration="5s" data-wow-delay="1s"`}
          >
            <img src={elem.icon} alt="icon" />
            <p>{elem.title}</p>
          </div>
        );
      })}
    </Box>
  );
};

export default Cards;
