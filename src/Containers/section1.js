import React, { useEffect } from "react";
import Navbar from "../Components/navbar";
import styled from "styled-components";
import phone from "../Media/phone.png";
import googlePlay from "../Media/google-play.png";
import appStore from "../Media/app-store.png";
import greenPattern from "../Media/greenPattern.svg";
import burger from "../Media/burger-mini.svg";
import plate from "../Media/plate-mini.svg";
import Adds from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import WOW from "wow.js";

const FirstSec = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 3.5rem;
  margin-bottom: 70px;
  padding: 20px;

  & h1 {
    position: relative;
    display: inline;
    flex-flow: row wrap;
    text-align: center;
    font-size: 50px;
    font-weight: 700;

    & h1 {
      font-size: 50px;
      color: var(--orange);
    }
  }

  & span {
    color: var(--grey) !important;
    margin-top: 7px;
  }

  & .wrapper {
    position: relative;
    margin-top: 20px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background: radial-gradient(
      42.68% 42.68% at 49.3% 50.39%,
      rgba(240, 105, 19, 0.28) 9.35%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;

    & div:nth-of-type(1) {
      display: flex;
      flex-flow: row wrap;
      gap: 15px;
      margin: 30px auto;
      max-width: 330px;
    }

    & .phone {
      position: relative;
      display: flex;
      flex-flow: row wrap;

      & > img:nth-of-type(1) {
        z-index: 10;
        flex: 1 1 auto;
        width: 100%;
        max-width: 330px;
      }

      & > img:nth-of-type(2) {
        z-index: 1;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 600px;
      }

      & > img:nth-of-type(3) {
        z-index: 11;
        position: absolute;
        transform: translateY(-45%);
        top: 45%;
        left: -20%;
        max-width: 180px;
      }

      & > img:nth-of-type(4) {
        z-index: 11;
        position: absolute;
        right: -20%;
        bottom: 2%;
        max-width: 180px;
      }

      @media screen and (max-width: 600px) {
        & > img:nth-of-type(4),
        & > img:nth-of-type(3) {
          display: none;
        }
      }
    }
  }
`;

const Section1 = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });

  return (
    <div>
      <Navbar />
      <FirstSec>
        <h1 className="wow fadeInDown" data-wow-duration="1.1s">
          The <h1>Online Ordering System</h1> <br /> For Your Restaurant
        </h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

        <div className="wrapper">
          <div>
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>

          <div
            className="phone wow fadeInUp"
            data-wow-duration="2.5s"
            data-wow-delay="2s"
            data-wow-offset={"100"}
          >
            <img src={phone} alt="phone" />
            <img src={greenPattern} alt="phone" />
            <img src={burger} alt="phone" />
            <img src={plate} alt="phone" />
          </div>
        </div>
      </FirstSec>
      <Adds />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Section1;
