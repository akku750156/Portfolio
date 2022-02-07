import React from "react";
import ProModal from "../Components/ProModal";

function Projects() {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading">
          &#xa0;&#x3c;PROJECTS&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-6 lg:mt-10 bg-transparent md:text-7xl lg:text-9xl font-bold">
          APPLICATION
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        {projects.map((project) => (
          <ProModal
            name={project.name}
            gitLink={project.gitLink}
            techs={project.techs}
          />
        ))}
        {/* <ProModal
          name="Instagram-Complete"
          gitLink="https://github.com/akku750156/Instagram-Complete.git"
          techs={["ReactJS", "Firebase", "MaterialUI"]}
        />
        <ProModal
          name="Portfolio"
          gitLink="https://github.com/akku750156/Portfolio.git"
          techs={["ReactJS", "TailwindCSS", "gsap", "aos"]}
        />
        <ProModal
          name="Tesla-Front-End"
          gitLink="https://github.com/akku750156/Tesla-Front-End.git"
          techs={["ReactJS", "Redux", "MaterialUI", "Styled-Components"]}
        />
        <ProModal
          name="Mausam"
          gitLink="https://github.com/akku750156/Mausam.git"
          techs={["ReactJS", "MaterialUI"]}
        />
        <ProModal
          name="Cart"
          gitLink="https://github.com/akku750156/Cart.git"
          techs={["ReactJS", "MaterialUI"]}
        /> */}
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Instagram-Complete",
    gitLink: "https://github.com/akku750156/Instagram-Complete.git",
    techs: ["ReactJS", "Firebase", "MaterialUI"],
  },
  {
    name: "Portfolio",
    gitLink: "https://github.com/akku750156/Portfolio.git",
    techs: ["ReactJS", "TailwindCSS", "gsap", "aos"],
  },
  {
    name: "Tesla-Front-End",
    gitLink: "https://github.com/akku750156/Tesla-Front-End.git",
    techs: ["ReactJS", "Redux", "MaterialUI", "Styled-Components"],
  },
  {
    name: "Mausam",
    gitLink: "https://github.com/akku750156/Mausam.git",
    techs: ["ReactJS", "MaterialUI"],
  },
  {
    name: "Cart",
    gitLink: "https://github.com/akku750156/Cart.git",
    techs: ["ReactJS", "MaterialUI"],
  },
];

export default Projects;
