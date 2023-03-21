import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Logo from "./images/blue-logo.png";

function NavBar() {
  return (
    <Nav>
      <NavLogoContainer>
        <Navlogo src={Logo} />
      </NavLogoContainer>
      <NavMiddleLinks>
        <div>Pricing</div>
        <div>Events Catelogue</div>
        <div>Resources</div>
      </NavMiddleLinks>
      <NavButton>Support Site</NavButton>
    </Nav>
  );
}
const Nav = styled.div`
  z-index: 10;
  display: flex;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 40px;
  border-bottom: solid 1px #ebebeb;
`;
const NavLogoContainer = styled.div`
  width: 130px;
  position: relative;
`;
const Navlogo = styled.img`
  width: 100%;
  position: relative;
`;
const NavMiddleLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  * {
    padding: 20px;
    color: rgb(31, 31, 31);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      color: #16ce72;
      transition: all 0.2s ease-in-out;
    }
  }
`;
const NavButton = styled.button`
  background-color: #16ce72;
  border-radius: 5px;
  color: white;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
`;
export default NavBar;
