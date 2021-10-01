import React, { useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

function Techs() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Container>
      <Arrow onClick={() => setAboutOpen(true)}>
        <p>Techs</p>
        <ArrowBackIosRoundedIcon />
      </Arrow>
      <Section show={aboutOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setAboutOpen(false)} />
        </CloseWrapper>
        <Wrap>
          <div className="heading">
            <div className="heading1">&#xa0;&#x3c;Techs&#x2f;&#x3e;&#xa0;</div>
            <div className="heading2">&#xa0;&#x3c;Skills&#x2f;&#x3e;&#xa0;</div>
          </div>
          <Logos>
            <Logo>
              <img src="../images/html5.png" alt="" />
              <p>HTML5</p>
            </Logo>
            <Logo>
              <img src="../images/css.png" alt="" />
              <p>CSS3</p>
            </Logo>
            <Logo>
              <img src="../images/js.png" alt="" />
              <p>JavaScript</p>
            </Logo>
            <Logo>
              <img src="../images/react.png" alt="" />
              <p>ReactJS</p>
            </Logo>
            <Logo>
              <img src="../images/redux.png" alt="" />
              <p>Redux</p>
            </Logo>
            <Logo>
              <img src="../images/next.png" alt="" />
              <p>NextJS</p>
            </Logo>
            <Logo>
              <img src="../images/firebase.png" alt="" />
              <p>Firebase</p>
            </Logo>
            <Logo>
              <img src="../images/tailwind.png" alt="" />
              <p>Tailwind</p>
            </Logo>
            <Logo>
              <img src="../images/matrerialUI.png" alt="" />
              <p>matrerialUI</p>
            </Logo>
            <Logo>
              <img src="../images/java.png" alt="" />
              <p>Java</p>
            </Logo>
          </Logos>
        </Wrap>
      </Section>
    </Container>
  );
}

export default Techs;

const Container = styled.div``;

const Arrow = styled.div`
  animation: arrow infinite 1.5s;
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 45vh;
  right: 0;
  p {
    transform: rotateZ(-90deg);
    letter-spacing: 2px;
    margin: 0px -5px;
  }
`;
const CloseWrapper = styled.div``;
const CustomClose = styled(CloseRoundedIcon)`
  position: fixed;
  top: 8vh;
  left: 5vw;
`;
const Section = styled.div`
  z-index: 4;
  transition: transform 0.6s ease-in;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20vh;
  left: 10vw;
  right: 10vw;

  .heading:hover {
    .heading1 {
      opacity: 0.05;
      transform: translateY(50px);
    }
    .heading2 {
      opacity: 1;
      transform: translateY(-50px);
      color: #ffffff;
    }
  }
  .heading1 {
    color: #ffffff;
    font-size: 150px;
    font-weight: 900;
    z-index: 16;
    background: transparent;
    transition: all 0.5s ease-in-out;
  }
  .heading2 {
    font-size: 150px;
    color: white;
    position: absolute;
    font-weight: 900;
    top: 50px;
    background: transparent;
    opacity: 0.05;
    transition: all 1s ease-in-out;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  box-shadow: 0px 0px 15px 5px black;
  padding: 20px;
  border-radius: 20px;
  /* min-height: 140vh; */
`;
const Logo = styled.div`
  height: 8rem;
  width: 8rem;
  margin: 20px;
  border-radius: 20%;
  border: 4px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 60%;
  }
`;
