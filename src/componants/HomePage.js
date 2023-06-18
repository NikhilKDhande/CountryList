import React, { useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import CountryDetailCard from "./CountryDetailCard";
function HomePage(props) {
  return (
    <div
      className={props.isDarkModeActive ? "body-darkMode" : "body-lightMode"}
    >
      <Navbar
        isDarkModeActive={props.isDarkModeActive}
        handleMode={props.handleMode}
      />
      <Cards isDarkModeActive={props.isDarkModeActive} />
    </div>
  );
}
export default HomePage;
