import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function Connect() {
  const classes = useStyles();

  return (
    <Container>
      <a href="https://www.facebook.com/profile.php?id=100037184014722">
        <FacebookIcon className={classes.root} />
      </a>
      <a href="https://github.com/akku750156">
        <GitHubIcon className={classes.root} />
      </a>
      <a href="https://www.instagram.com/__s.k.yyy__/">
        <InstagramIcon className={classes.root} />
      </a>
      <a href="https://www.linkedin.com/in/akash-tiwari-03b3621b7/">
        <LinkedInIcon className={classes.root} />
      </a>
    </Container>
  );
}

export default Connect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4vh;
  right: 3vw;
  z-index: 2;

  a {
    margin-bottom: 1vh;
  }
`;
