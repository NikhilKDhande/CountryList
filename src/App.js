import React, { useState } from "react";
import HomePage from "./componants/HomePage";
import { Router, Routes, Route, Link } from "react-router-dom";
import CountryDetailCard from "./componants/CountryDetailCard";

function App() {
  const [isDarkModeActive, setISDarkModeActive] = useState(false);
  function handleMode() {
    setISDarkModeActive((prev) => !prev);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isDarkModeActive={isDarkModeActive}
              handleMode={handleMode}
            />
          }
        />
        <Route
          path="/:countryName"
          element={
            <CountryDetailCard
              handleMode={handleMode}
              isDarkModeActive={isDarkModeActive}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
