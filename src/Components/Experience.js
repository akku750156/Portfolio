import React, { useState } from "react";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ExpModal from "../Components/ExpModal";

function Experience() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Container>
      <Arrow onClick={() => setAboutOpen(true)}>
        <p>Experience</p>
        <KeyboardArrowUpRoundedIcon />
      </Arrow>
      <Section show={aboutOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setAboutOpen(false)} />
        </CloseWrapper>
        <Wrap>
          <div className="heading">
            <div className="heading1">
              &#xa0;&#x3c;Experience&#x2f;&#x3e;&#xa0;
            </div>
            <div className="heading2">&#xa0;&#x3c;Hustle&#x2f;&#x3e;&#xa0;</div>
          </div>
          <div className="exp_Content">
            <ExpModal
              company="HEALINGS"
              job="React Front-End Developer"
              point1="● I worked in HEALINGS as a React FrontEnd Developer"
              point2="● Working on the front-end part of their application using REACT, MATERIAL UI"
              date="May 2021 - Present"
            />
            <ExpModal
              company="MYNERVA"
              job="Front-End Developer"
              point1="● Building entire UI of Web Application of an ED-TECH
platform"
              point2="● Using REACT, REDUX ,TAILWIND"
              date="Sep 2021 - Present"
            />
          </div>
        </Wrap>
      </Section>
    </Container>
  );
}

export default Experience;

const Container = styled.div``;

const Arrow = styled.div`
  animation: arrowdown infinite 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
  top: 94vh;
  right: 48vw;
  p {
    letter-spacing: 2px;
    margin: 0px 5px;
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
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
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
  overflow: clip;
  overflow: auto;
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  .exp_Content {
    margin-top: 80px;
  }
`;
