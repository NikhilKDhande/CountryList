import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import { BsSearch, BsChevronDown } from "react-icons/bs";

function Cards(props) {
  const [countryData, setCountryData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((rec) => rec.json())
      .then((data) => setCountryData(data));
  }, []);
  function handleChange(e) {
    e.preventDefault();
    setSearchByName(e.target.value);

    if (e.target.value !== "") {
      const filterData = countryData.filter((country) => {
        return country.name.common
          .toLocaleLowerCase()
          .match(searchByName.toLocaleLowerCase());
      });
      setSearchData(filterData);
    } else {
      setSearchData(countryData);
    }
  }
  function handleFilter(e) {
    e.preventDefault();
    if (e.target.value !== "All") {
      const filterData = countryData.filter((country) => {
        return country.region.match(e.target.value);
      });
      console.log(filterData);
      setSearchData(filterData);
    } else {
      setSearchData(countryData);
    }
  }
  const singleElementOfCountry =
    searchData.length == 0
      ? countryData.map((singleCountrydata) => {
          return (
            <SingleCard
              key={singleCountrydata.name.common}
              singleCountrydata={singleCountrydata}
              isDarkModeActive={props.isDarkModeActive}
              allCounstryData={countryData}
            />
          );
        })
      : searchData.map((singleCountrydata) => {
          return (
            <SingleCard
              key={singleCountrydata.name.common}
              singleCountrydata={singleCountrydata}
              isDarkModeActive={props.isDarkModeActive}
              allCounstryData={countryData}
            />
          );
        });

  return (
    <>
      <div className="formContainer">
        <div className="searchBarContainer">
          <BsSearch
            className={
              props.isDarkModeActive
                ? "searchicon-darkmode"
                : "searchicon-lightMode"
            }
          />
          <input
            type="text"
            placeholder="Search for the counrtry"
            className={
              props.isDarkModeActive
                ? "searchBar-darkMode"
                : "searchBar-lightMode"
            }
            onChange={handleChange}
            value={searchByName}
          />
        </div>
        <div className="filterContainer">
          <select
            className={
              props.isDarkModeActive
                ? "filterBtn-darkMode"
                : "filterBtn-lightMode"
            }
            onChange={handleFilter}
          >
            <option defaultValue="All">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="cardContainer">{singleElementOfCountry}</div>
    </>
  );
}

export default Cards;
