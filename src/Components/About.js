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
          <div className="about_section">
            <div className="section1">
              <p>
                I am currently a{" "}
                <div className="dev">Front-End Web Developer</div> living in
                Ayodhya,India. An undergrad of BMS College of Engineering. I
                make Websites usually with{" "}
                <span style={{ color: "yellow", fontFamily: "Staatliches" }}>
                  ReactJS
                </span>{" "}
                or{" "}
                <span style={{ color: "yellow", fontFamily: "Staatliches" }}>
                  NextJS
                </span>
                . I'm also learning Back-End Development and looking forward to
                be a <div className="dev">Full Stack Web Developer</div>{" "}
              </p>
            </div>
            <div className="section2">
              <p>
                If you have something in{" "}
                <span style={{ color: "yellow", fontFamily: "Staatliches" }}>
                  MIND
                </span>{" "}
                and want to put it on the front, you can reach me, we will get
                <span className="dev"> straight to work.</span>
              </p>
            </div>
            <div className="section3">
              <p>
                You can reach me on{" "}
                <a
                  href="https://www.linkedin.com/in/akash-tiwari-03b3621b7/"
                  className="dev1"
                >
                  LINKEDIN
                </a>{" "}
                ,{" "}
                <a
                  href="https://www.instagram.com/__s.k.yyy__/"
                  className="dev1"
                >
                  INSTAGRAM
                </a>{" "}
                and on{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100037184014722"
                  className="dev1"
                >
                  FACEBOOK
                </a>
              </p>
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
  /* justify-content: center; */
  /* align-items: center; */
  /* position: absolute;
  top: 20vh;
  left: 10vw;
  right: 10vw; */
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
  .section1 {
    display: flex;
    justify-content: flex-start;
  }
  .section2 {
    display: flex;
    justify-content: flex-end;
  }
  .about_section p {
    font-size: 25px;
    margin: 5%;
    width: 50vw;
    font-family: "Roboto";
  }
  /* .p1 {
    margin: 5%;
    width: 50vw;
  }
  .p2 {
    margin: 5%;
    width: 50vw;
    align-items: right;
  } */
  .dev {
    font-size: 50px;
    margin: 15px 0px;
    color: #06ff65;
  }
  .dev1 {
    font-size: 50px;
    margin: 15px 0px;
    color: #06ff65;
    text-decoration: none;
  }
`;
