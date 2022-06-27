import React, { useEffect } from "react";
import styled from "styled-components";
import img from "../Media/multi-phones.png";
import { WOW } from "wowjs";

const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;

  & .box {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;

    & .left {
      position: relative;
      background-color: var(--green);

      & img {
        width: 100%;
        height: 100%;
      }
    }

    & .right {
      position: relative;
      display: flex;
      flex-flow: column wrap;
      gap: 10px;
      justify-content: center;
      padding: 20px;
      min-height: 470px;

      & h1 {
        position: relative;
        display: inline;
        font-size: 34px;
        font-weight: 700;

        & h1 {
          font-size: 34px;
          color: var(--orange);
        }
      }

      & p {
        max-width: 500px;
        color: #848484;
        margin-top: 10px;
        font-weight: 500;
      }
    }

    & .right,
    & .left {
      width: 49%;
    }

    @media screen and (max-width: 800px) {
      & .right,
      & .left {
        width: 100%;
      }

      & .right {
        justify-content: flex-start;
      }
    }
  }
`;

const Section3 = () => {
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
        <div className="left">
          <img src={img} alt="add" />
        </div>
        <div
          className="right wow fadeIn"
          data-wow-duration="3s"
          data-wow-delay="1s"
        >
          <h1>
            Develop an App and Website <br /> to <h1>Order Food</h1>
          </h1>
          <p>
            improve customized iOS and Android apps for your food business to
            give your customers a reason to love you more, and Establish your
            own user-friendly & fully-completed website to let your customers
            order at their ease.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section3;
