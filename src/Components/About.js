import React, { useState } from "react";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Fade from "react-reveal/Fade";

function About() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Container>
      <Arrow onClick={() => setAboutOpen(true)}>
        <ArrowForwardIosRoundedIcon />
        <p>Who &nbsp; I &nbsp; am</p>
      </Arrow>
      <Section show={aboutOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setAboutOpen(false)} />
        </CloseWrapper>

        <Wrap>
          <div className="heading">
            <div className="heading1">&#xa0;&#x3c;About&#x2f;&#x3e;&#xa0;</div>
            <div className="heading2">
              &#xa0;&#x3c;Akash Tiwari&#x2f;&#x3e;&#xa0;
            </div>
          </div>
        </Wrap>
      </Section>
    </Container>
  );
}

export default About;

const Container = styled.div``;

const Arrow = styled.div`
  animation: arrow infinite 1.5s;
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 45vh;
  left: 0;
  p {
    transform: rotateZ(90deg);
    letter-spacing: 2px;
    margin: 0px -30px;
  }
`;

const Section = styled.div`
  z-index: 4;
  transition: transform 0.6s ease-in;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  direction: rtl;
  width: 100vw;
  height: 100vh;
`;

const CloseWrapper = styled.div``;

const CustomClose = styled(CloseRoundedIcon)`
  position: fixed;
  top: 8vh;
  left: 5vw;
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
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .heading:hover {
    .heading1 {
      opacity: 0.05;
      transform: translateY(50px);
      color: white;
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
    transition: all 1s ease-in-out;
  }
  .heading2 {
    font-size: 150px;
    color: white;
    position: absolute;
    font-weight: 900;
    top: 50px;
    background: transparent;
    opacity: 0.05;
    transition: all 0.5s ease-in-out;
  }
`;
