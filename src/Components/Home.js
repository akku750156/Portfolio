import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import MenuroundedIcon from "@material-ui/icons/MenuRounded";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="m-2 ">
        <div className="bg-transparent flex justify-between items-center sm:hidden">
          <div className="flex justify-center items-center">
            <div className="" onClick={() => setSidebar(true)}>
              <MenuroundedIcon />
            </div>
            <div className="ml-2">Menu</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mr-2">Projects</div>
            <BlurOnRoundedIcon fontSize="large" />
          </div>
        </div>
        <Fade bottom>
          <div className="flex flex-col justify-center items-center h-screen relative">
            <div className="font-serif text-5xl absolute bottom-1/2 md:text-7xl lg:text-8xl text-bgheading">
              &#xa0;&#x3c;HELLO&#x2f;&#x3e;&#xa0;
            </div>
            <div className="font-sans text-6xl absolute bg-transparent md:text-8xl lg:text-9xl text-heading">
              &#xa0;&#x3c;WORLD&#x2f;&#x3e;&#xa0;
            </div>
          </div>
        </Fade>
      </div>
      {sidebar && (
        <div className="font-mono absolute top-0 left-0 w-screen h-screen bg-secondary flex justify-center items-center">
          <Fade left>
            <div
              className="absolute top-2 left-2 bg-secondary"
              onClick={() => setSidebar(false)}
            >
              <CloseRoundedIcon className="bg-secondary" color="primary" />
            </div>
            <div className="flex flex-col justify-content text-left text-4xl bg-secondary tracking-widest text-lgtext">
              <div className="bg-secondary">
                <Link to="/About" className="bg-secondary">
                  About
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link to="/Experience" className="bg-secondary">
                  Experience
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link to="/Techs" className="bg-secondary">
                  Techs
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}

export default Home;

// const Logo = styled.img`
//   width: 5rem;
//   padding: 0 10px;
//   animation: rotation infinite 3.5s;
// `;
