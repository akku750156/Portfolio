import React from "react";
import styled from "styled-components";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

function ExpModal(props) {
  return (
    <Container>
      <div className="container">
        <div className="heading_line">
          <div className="dot_container">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
          <div>{props.date}</div>
        </div>
        <hr className="hzline" />
        <div className="content">
          <div className="line company">{props.company}</div>
          <div className="line job">
            <WorkOutlineIcon />
            <div className="jobline">{props.job}</div>
          </div>
          <div className="">{props.point1}</div>
          <div className="">{props.point2}</div>
        </div>
      </div>
    </Container>
  );
}

export default ExpModal;

const Container = styled.div`
  height: 30vh;
  width: 80vw;
  margin-bottom: 40px;
  .heading_line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .dot_container {
    display: flex;
  }
  .dot {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 5px;
    box-shadow: 0 0 15px black;
  }
  .dot1 {
    background-color: red;
  }
  .dot2 {
    background-color: yellow;
  }
  .dot3 {
    background-color: green;
  }
  .content {
    margin: 20px 0px;
  }
  .line {
    margin-bottom: 10px;
  }
  .company {
    font-size: 30px;
  }
  .job {
    display: flex;
    align-items: center;
  }
  .jobline {
    margin-left: 10px;
  }
  .hzline {
    background-color: white;
    border-radius: 50%;
  }
  .container {
    box-shadow: 0px 0px 15px 5px black;
    padding: 20px;
    border-radius: 20px;
  }
`;
