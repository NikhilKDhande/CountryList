import React from "react";
import { Link } from "react-router-dom";
import CountryDetailCard from "./CountryDetailCard";

function SingleCard(props) {
  return (
    <div
      className={
        props.isDarkModeActive
          ? "countryCard-darkMode"
          : "countryCard-lightMode"
      }
    >
      <Link
        to={`/:${props.singleCountrydata.name.common}`}
        state={[props.singleCountrydata, props.allCounstryData]}
        key={props.singleCountrydata.name.common}
      >
        <div className="countryFlagImgContainer">
          <img className="flagImg" src={props.singleCountrydata.flags.png} />
        </div>
        <div
          className={
            props.isDarkModeActive
              ? "countryDetail-darkMode"
              : "countryDetail-lightMode"
          }
        >
          <h2>{props.singleCountrydata.name.common}</h2>
          <p>
            Population:{" "}
            <span>
              {props.singleCountrydata.population.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            Region: <span>{props.singleCountrydata.region}</span>
          </p>
          <p>
            Capital: <span>{props.singleCountrydata.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default SingleCard;
