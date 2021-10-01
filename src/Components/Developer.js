import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Developer() {
  return (
    <Container>
      <Fade bottom>
        <Dev>
          <div className="heading1">&#xa0;&#x3c;HELLO&#x2f;&#x3e;&#xa0;</div>
          <div className="heading">
            &#xa0;&#x3c;DEVELOPERS&#x2f;&#x3e;&#xa0;
          </div>
        </Dev>
      </Fade>
    </Container>
  );
}

export default Developer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10vh;
  left: 10vw;
  min-height: 70vh;

  .heading {
    font-family: "Stick No Bills", sans-serif;
    font-size: 200px;
    background: transparent;
  }
  .heading1 {
    font-family: "Londrina Outline", cursive;
    font-size: 150px;
    margin-bottom: -100px;
  }
`;
const Dev = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
