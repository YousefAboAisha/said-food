import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../Media/Logo.svg";
import googlePlay from "../Media/google-play.png";
import appStore from "../Media/app-store.png";
import WOW from "wow.js";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 85%;
  min-height: 259px;
  background: #ffffff;
  box-shadow: 0px 13px 21px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin: 50px auto;
  padding: 25px 20px;
  gap: 40px;

  @media screen and (max-width: 700px) {
    & {
      width: 95%;
    }
  }

  & .first {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-self: flex-start;
    gap: 10px;

    & .logo {
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      width: 70px;

      & span {
        font-weight: 600;
        color: #303030;
        text-align: center;
        font-size: 20px;
      }
    }

    & > span {
      color: #848484;
    }

    & div {
      display: flex;
      justify-content: center;
      gap: 10px;

      /* & img {
        border-radius: 16px;
      } */
    }
  }

  & .second,
  & .third {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
  }

  & .second span,
  & .third span {
    color: #848484;
    font-size: 15px;
  }

  & h1 {
    font-size: 18px;
    font-weight: 700;
  }

  & .fourth {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });
  return (
    <Wrapper
      className="wow fadeInDown"
      data-wow-duration="2s"
      data-wow-delay="0.5s"
    >
      <div className="first">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Said</span>
        </div>
        <span>Lorem ipsum dolor sit amet.</span>

        <div>
          <img src={appStore} alt="App Store" />
          <img src={googlePlay} alt="Google Play" />
        </div>
      </div>

      <div className="second">
        <h1>More about our app</h1>
        <span>careers</span>
        <span>our team</span>
        <span>help center</span>
      </div>

      <div className="third">
        <h1>Our policy privacy</h1>
        <span>careers</span>
        <span>our team</span>
        <span>help center</span>
      </div>

      <div className="fourth">
        <span>© 2022 said. All rights reserved.</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
