import React from "react";
import styled from "styled-components";
import MenuroundedIcon from "@material-ui/icons/MenuRounded";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import Fade from "react-reveal/Fade";

function Header() {
  return (
    <Fade bottom>
      <Nav>
        {/* <LeftMenu>
          <MenuroundedIcon />
          <span>Menu</span>
        </LeftMenu> */}
        <MidMenu>
          <Logo src="/Images/logo.png" />
        </MidMenu>
        {/* <RightMenu>
          <span>View Projects</span>
          <BlurOnRoundedIcon fontSize="large" />
        </RightMenu> */}
      </Nav>
    </Fade>
  );
}

export default Header;

const Nav = styled.div`
  background-color: transparent;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw 5vw;

  span {
    padding: 0 10px;
    cursor: pointer;
    position: relative;
    letter-spacing: 2px;

    &:after {
      content: "";
      background: white;
      background-color: #d4ecdd;
      height: 2px;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }
  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @media (max-width: 860px) {
    span {
      display: none;
    }
  }
`;
// const LeftMenu = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const RightMenu = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const MidMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;

  div {
    padding-right: 5px;
    &:hover {
      animation: logoAnim 1s;
    }
  }
`;

const Logo = styled.img`
  width: 5rem;
  padding: 0 10px;
  animation: rotation infinite 3.5s;
`;
