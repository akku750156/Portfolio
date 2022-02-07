import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function ProModal(props) {
  const classes = useStyles();

  return (
    <div className="my-8 border-2 p-3 rounded-xl shadow-2xl bg-modal text-white font-sans">
      <div className="flex flex-col m-auto bg-modal">
        <div className="flex justify-between bg-modal mb-2">
          <div className="flex justify-center items-center bg-modal">
            <div className="h-4 w-4 bg-red-600 rounded-full mr-1 drop-shadow-2xl"></div>
            <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1 drop-shadow-2xl"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full drop-shadow-2xl"></div>
          </div>
          <div className="bg-modal">
            <a href={props.gitLink} className="mb-2 bg-transparent">
              <GitHubIcon
                className={classes.root}
                style={{ backgroundColor: "transparent" }}
              />
            </a>
          </div>
        </div>
        <hr className="bg-modal" />
        <div className="bg-modal">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-modal my-2">
            {props.name}
          </div>

          <div className="bg-modal flex items-start flex-wrap">
            {props.techs.map((tech) => (
              <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProModal;
