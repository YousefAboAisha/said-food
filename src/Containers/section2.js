import React, { useEffect } from "react";
import styled from "styled-components";
import add1 from "../Media/add1.png";
import add2 from "../Media/add2.png";
import add3 from "../Media/add3.png";
import add4 from "../Media/add4.png";
import Cards from "../Components/cards";
import WOW from "wow.js";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #fbfbfb 0%, #f9f9f9 24.41%);
  padding: 30px 0;

  & .adds {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 10px 30px;
    gap: 54px;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
      min-width: 123px;
      height: 90px;
      margin: 0 auto;
    }
  }

  & .cards-wrapper {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 200px auto;
    margin-bottom: 150px;

    & h1 {
      font-weight: 700;
      font-size: 34px;
      text-align: center;
      margin-bottom: 68px;
    }
  }
`;

const Section2 = () => {
  useEffect(() => {
    new WOW({
      live: true,
      boxClass: "wow",
      mobile: "false",
    }).init();
  });

  return (
    <Wrapper>
      <div className="adds wow fadeIn" data-wow-duration="1s">
        <div>
          <img src={add1} alt="add" />
        </div>
        <div>
          <img src={add2} alt="add" />
        </div>
        <div>
          <img src={add3} alt="add" />
        </div>
        <div>
          <img src={add4} alt="add" />
        </div>
      </div>

      <div className="cards-wrapper">
        <h1>
          Get advanced online ordering software <br /> for your restaurant
        </h1>
        <Cards />
      </div>
    </Wrapper>
  );
};

export default Section2;
