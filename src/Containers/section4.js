import React, { useEffect } from "react";
import styled from "styled-components";
import phone2 from "../Media/phone2.png";
import backdrop from "../Media/backbrop-orange.svg";
import percent from "../Media/percent.png";
import burger from "../Media/burger-mini.svg";
import user from "../Media/user.png";
import search from "../Media/search.png";
import road from "../Media/road.png";
import WOW from "wow.js";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #fbfbfb 0%, #f9f9f9 24.41%);
  padding: 20px;
  padding-top: 200px;

  @media screen and (max-width: 800px) {
    & {
      padding-top: 70px;
    }
  }

  & .box {
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    padding: 20px;
    gap: 20px;

    & .left,
    & .middle,
    & .right {
      margin: 0 auto;
    }

    & .left {
      position: relative;
      display: flex;
      flex-flow: column wrap;
      flex: 1 0 300px;
      padding: 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;

      & .category {
        position: relative;
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
        width: 100%;
        align-items: center;
        padding: 10px 15px;
        border-right: 6px solid #dedddd;
        border-radius: 5px;

        & div {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgba(153, 153, 153, 0.18);

          & img {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
          }
        }

        & span {
          font-weight: 600;
          color: #999999;
        }

        &:nth-of-type(1) {
          border-right: 6px solid var(--green);
        }

        &:nth-of-type(1) div {
          background-color: var(--green);
        }

        &:nth-of-type(1) span {
          color: var(--green);
        }
      }

      & .bar {
        position: absolute;
        height: 100%;
        width: 3px;
        border-color: var(--green);
        right: 0;
        top: 0;
      }
    }

    & .middle {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 300px;
      padding: 20px;

      & img:nth-of-type(1) {
        z-index: 11;
      }

      & img:nth-of-type(2) {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        z-index: 10;
        width: 100%;
      }

      & img:nth-of-type(3) {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 20%;
        top: 75%;
        z-index: 12;
      }

      @media screen and (max-width: 600px) {
        & > img:nth-of-type(3) {
          display: none;
        }
      }
    }

    & .right {
      position: relative;
      flex: 1 0 300px;
      padding: 20px;
      align-items: center;

      & img {
        position: absolute;
        bottom: 2%;
        right: 2%;
      }

      & button {
        margin-top: 15px;
        padding: 15px 30px;
        background-color: var(--green);
        color: white;
        outline: none;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        text-transform: capitalize;
        font-weight: 600;
      }
    }
  }
`;

const Section4 = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });

  return (
    <Wrapper>
      <div className="box">
        <div className="left wow fadeInLeft">
          <div className="category">
            <div>
              <img src={user} alt="user" />
            </div>
            <span>Profile Screen</span>
          </div>

          <div className="category">
            <div>
              <img src={search} alt="search" />
            </div>
            <span>Profile Screen</span>
          </div>

          <div className="category">
            <div>
              <img src={road} alt="road" />
            </div>
            <span>Profile Screen</span>
          </div>
          <div className="bar"></div>
        </div>

        <div className="middle wow fadeInDown">
          <img src={phone2} alt="phone" />
          <img src={backdrop} alt="backdrop" />
          <img src={burger} alt="burger" />
        </div>

        <div className="right wow fadeInRight">
          <h1>
            Know every thing <br /> about the app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl sed
            quisque viverra pretium sed in justo, amet. Dolor, interdum et
            scelerisque tincidunt pellentesque ut vulputate.
          </p>
          <button>Learn More</button>
          <img src={percent} alt="percent" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Section4;
