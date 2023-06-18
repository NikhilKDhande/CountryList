import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router";
import Navbar from "./Navbar";
function CountryDetailCard(props) {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const countryDetails = location.state[0];
  const allCountrydata = location.state[1];

  const listOfBorderCountry = [];
  if (countryDetails.borders != null) {
    for (let i = 0; i < countryDetails.borders.length; i++) {
      for (let j = 0; j < allCountrydata.length; j++) {
        if (countryDetails.borders[i] == allCountrydata[j].cca3) {
          listOfBorderCountry.push(allCountrydata[j].name.common);
          break;
        }
      }
    }
  }

  const borderCountry =
    listOfBorderCountry != null &&
    listOfBorderCountry.map((item) => (
      <button
        className={
          props.isDarkModeActive
            ? "borderCountryBtn-darkMode"
            : "borderCountryBtn-lightMode"
        }
      >
        {item}
      </button>
    ));

  const topLevelDomain = countryDetails.tld.map((item) => <span>{item} </span>);
  const nativeNameList =
    countryDetails.name.nativeName != null &&
    Object.values(countryDetails.name.nativeName);
  const currrency =
    countryDetails.currencies != null &&
    Object.values(countryDetails.currencies);
  const languagesList =
    countryDetails.languages && Object.values(countryDetails.languages);

  function handleClick() {
    navigate("/");
  }
  return (
    <div
      className={props.isDarkModeActive ? "body-darkMode" : "body-lightMode"}
    >
      <Navbar
        handleMode={props.handleMode}
        isDarkModeActive={props.isDarkModeActive}
      />
      <button
        className={
          props.isDarkModeActive ? "backBtn-darkMode" : "backBtn-lightMode"
        }
        onClick={handleClick}
      >
        <BsArrowLeft className="backicon" /> Back
      </button>
      <div
        className={
          props.isDarkModeActive
            ? "countryAllDetail-darkMode"
            : "countryAllDetail-lightMode"
        }
      >
        <div className="detailFlagContainer">
          <img className="detailFlagImg" src={countryDetails.flags.svg} />
        </div>
        <div
          className={
            props.isDarkModeActive
              ? "countryDetailPage-darkMode"
              : "countryDetailPage-lightMode"
          }
        >
          <h1>{countryDetails.name.common}</h1>
          <div className="details">
            <div className="sectionTwo">
              {nativeNameList && (
                <p>
                  Native Name: <span>{nativeNameList[0].common}</span>
                </p>
              )}
              <p>
                Population:{" "}
                <span>
                  {countryDetails.population.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
              <p>
                Region: <span>{countryDetails.region}</span>
              </p>
              <p>
                Sub Region: <span>{countryDetails.subregion}</span>
              </p>
              {countryDetails.capital != null && (
                <p>
                  Capital: <span>{countryDetails.capital[0]}</span>
                </p>
              )}
            </div>
            <div className="sectionTwo">
              <p>Top Level Domain: {topLevelDomain}</p>
              {currrency && (
                <p>
                  Currencies: <span>{currrency[0].name}</span>
                </p>
              )}
              {languagesList && (
                <p>
                  Languages:{" "}
                  <span>{languagesList.map((item) => item + " ")}</span>
                </p>
              )}
            </div>
          </div>
          {borderCountry.length > 0 ? (
            <div className="borderCountry">
              <h4>Border Countries:</h4>
              {borderCountry}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default CountryDetailCard;
