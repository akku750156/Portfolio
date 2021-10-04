import React from "react";
import styled from "styled-components";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

function ExpModal(props) {
  return (
    <div className="my-8 border-2 p-3 rounded-xl shadow-2xl bg-blue-900">
      <div className="flex flex-col m-auto bg-blue-900">
        <div className="flex justify-between bg-blue-900">
          <div className="flex justify-center items-center bg-blue-900">
            <div className="h-4 w-4 bg-red-600 rounded-full mr-1"></div>
            <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-blue-900">{props.date}</div>
        </div>
        <hr className="bg-blue-900" />
        <div className="bg-blue-900">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-blue-900">
            {props.company}
          </div>
          <div className="flex items-center bg-blue-900">
            <WorkOutlineIcon className="bg-blue-900" />
            <div className="ml-2 bg-blue-900">{props.job}</div>
          </div>
          <div className="bg-blue-900">{props.point1}</div>
          <div className="bg-blue-900">{props.point2}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpModal;
