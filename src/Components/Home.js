import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import MenuroundedIcon from "@material-ui/icons/MenuRounded";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="m-2">
        <div className="bg-transparent flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="" onClick={() => setSidebar(true)}>
              <MenuroundedIcon />
            </div>
            <div className="ml-2">Menu</div>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/Projects" className="flex justify-center items-center">
              <div className="mr-2">Projects</div>
              <BlurOnRoundedIcon fontSize="large" />
            </Link>
          </div>
        </div>
        <Fade bottom>
          <div className="flex flex-col justify-center h-screen items-center relative">
            <div className="font-serif absolute bg-transparent mb-12 sm:mb-12 md:mb-20 lg:mb-28 text-5xl md:text-7xl lg:text-8xl text-bgheading">
              &#xa0;&#x3c;HELLO&#x2f;&#x3e;&#xa0;
            </div>
            <div className="text-heading font-sans text-6xl bg-transparent md:text-8xl lg:text-9xl font-bold">
              &#xa0;&#x3c;WORLD&#x2f;&#x3e;&#xa0;
            </div>
          </div>
        </Fade>
      </div>
      {sidebar && (
        <div className="font-mono absolute top-0 left-0 w-screen h-screen bg-secondary flex justify-center items-center overflow-hidden">
          <Fade left>
            <div
              className="absolute top-2 left-2 bg-secondary"
              onClick={() => setSidebar(false)}
            >
              <CloseRoundedIcon className="bg-secondary" color="primary" />
            </div>
            <div className="flex flex-col justify-content text-left text-4xl bg-secondary tracking-widest text-lgtext sm:text-5xl md:text-7xl lg:text-8xl">
              <div className="bg-secondary">
                <Link
                  to="/About"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all"
                >
                  About
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link
                  to="/Experience"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all"
                >
                  Experience
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link
                  to="/Techs"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all"
                >
                  Techs
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      )}
      {/* <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 flex flex-col font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl">
        <div className="font-mono">
          <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-8">Hi, Welcome to my </div>
          <div className="text-smtext font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-8">
            PARADISE
          </div>

          <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-8">
            This is{" "}
            <span className="text-3xl sm:text-5xl md:text-7xl text-lgtext font-bold my-2">
              Akash Tiwari
            </span>
          </div>
          <div className="text-smtext my-2 font-bold">
            "Things aren't always{" "}
            <span className="text-black bg-white p-1 rounded-xl">#000000</span>{" "}
            and{" "}
            <span className="text-white bg-black px-2 py-1 rounded-xl">
              #ffffff{" "}
            </span>
            "
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;

// const Logo = styled.img`
//   width: 5rem;
//   padding: 0 10px;
//   animation: rotation infinite 3.5s;
// `;
