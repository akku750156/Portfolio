import React, { useState } from "react";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ExpModal from "../Components/ExpModal";

function Experience() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="m-4 sm:m-5 md:m-6 lg:m-7">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl md:text-7xl lg:text-9xl text-bgheading">
          &#xa0;&#x3c;TECHS&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-8 lg:mt-16 bg-transparent md:text-7xl lg:text-9xl font-bold">
          SKILLS
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
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
    </div>
  );
}

export default Experience;
