import React from "react";
import styled from "styled-components";
import logo from "../Media/Logo.svg";
import menu from "../Media/menu.png";

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  width: 100%;
  margin-top: 20px;

  & .logo {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 5px;

    & span {
      text-align: center;
      font-weight: 600;
      color: #303030;
    }
  }

  & .menu {
    display: flex;
    gap: 10px;
    align-items: center;

    & span {
      font-size: 14px;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Said</span>
      </div>
      <div className="menu">
        <span>Menu</span>
        <img src={menu} alt="menu" />
      </div>
    </Nav>
  );
};

export default Navbar;
