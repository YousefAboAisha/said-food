import React, { useEffect } from "react";
import styled from "styled-components";
import person from "../Media/person.png";
import googlePlay from "../Media/google-play.png";
import appStore from "../Media/app-store.png";
import android from "../Media/download-android.png";
import ios from "../Media/download-ios.png";
import Footer from "../Components/footer";
import WOW from "wow.js";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #fbfbfb 0%, #f9f9f9 24.41%);
  padding-top: 200px;
  display: flex;
  flex-flow: row wrap;

  & .box {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    background-color: var(--green);
    border-radius: 253px 122px 74px 61px / 350px 350px 51px 61px;
    height: 400px;
    padding: 10px;
    gap: 30px;
    margin: 0 auto;

    & .left {
      position: relative;
      width: 480px;
      height: 469px;
      top: -21%;
      left: 0;

      @media screen and (max-width: 600px) {
        & {
          display: none;
        }
      }
    }

    & .right {
      position: relative;
      display: flex;
      flex-flow: column wrap;
      flex: 1 0 300px;
      margin-top: 5%;

      & h1 {
        font-weight: 700;
        font-size: 40px;
        color: #fff;
      }

      & div {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-self: flex-start;
      }
    }
  }

  @media screen and (max-width: 900px) {
    & {
      padding-top: 70px;
    }

    & .box {
      background: none;
      height: fit-content;

      & .right {
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        & h1 {
          color: var(--green);
          text-align: center;
          font-weight: 800;
        }

        & div {
          justify-content: center;
          align-self: center;
          margin-top: 10px;
        }
      }
    }
  }

  & .summary {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    margin: 100px auto;
    align-items: center;

    & h1 {
      font-weight: 700;
    }

    & span {
      color: #757575;
      margin-top: 10px;
    }

    & .w50 {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      gap: 22px;
      margin-top: 40px;
      padding: 20px;

      & img {
        width: auto;
      }

      @media screen and (max-width: 600px) {
        & img {
          width: 100%;
          flex: 1 0 auto;
        }
      }
    }
  }
`;

const Section5 = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });

  return (
    <Wrapper>
      <div className="box wow slideInUp">
        <div className="left">
          <img src={person} alt="person" />
        </div>

        <div className="right">
          <h1>
            GET MORE CUSTOMERS <br /> AND FACILITATE YOUR <br /> ORDERS
          </h1>
          <div>
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>

      <div className="summary">
        <h1 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">
          Download the app today
        </h1>
        <span
          className="wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          Lorem ipsum dolor sit amet, consectetur.
        </span>
        <div className="w50">
          <img
            src={android}
            alt="android"
            className="wow fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          />
          <img
            src={ios}
            alt="ios"
            className="wow fadeInRight"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          />
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
};

export default Section5;
