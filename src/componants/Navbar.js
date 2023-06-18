import { getQueriesForElement } from "@testing-library/react";
import React, { useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

function Navbar(props) {
  return (
    <div
      className={
        props.isDarkModeActive ? "navbar-darkMode" : "navbar-lightMode"
      }
    >
      <h1>
        <b>Where is the world?</b>
      </h1>
      <button
        className={
          props.isDarkModeActive ? "ModeBtn-darkMode" : "ModeBtn-lightMode"
        }
        onClick={props.handleMode}
      >
        {props.isDarkModeActive ? (
          <span>
            <BsSun className="lightModeIcon" />
            Light Mode
          </span>
        ) : (
          <span>
            <BsMoonStars className="lightModeIcon" />
            Dark Mode
          </span>
        )}
      </button>
    </div>
  );
}
export default Navbar;
