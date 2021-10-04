import React, { useState } from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import styled from "styled-components";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import skills from "../skill_data";

function Techs() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="my-4 mx-4">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl md:text-7xl lg:text-9xl text-bgheading">
          &#xa0;&#x3c;TECHS&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-8 lg:mt-16 bg-transparent md:text-7xl lg:text-9xl font-bold">
          SKILLS
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center my-16 sm:my-20 md:my-24 lg:my-28">
        {skills.map((skill) => (
          <div className="h-16 w-16 m-2 sm:m-3 md:m-4 lg:m-5 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 border-0 border-yellow-600 hover:bg-transparent transition-all p-5 lg:p-6 rounded-xl flex flex-col justify-center items-center bg-tertiary">
            <img src={skill.img} alt="" className="bg-transparent" />
            <div className="text-xs sm:text-base md:text-xl lg:text-2xl bg-transparent">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techs;
