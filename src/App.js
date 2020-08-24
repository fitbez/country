import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleSearch = (e) => {
    setSearchedCountry(e.target.value);
  };

  // console.log(searchedCountry);

  //country to show from the search bar
  const filteredCountries = searchedCountry.toUpperCase();
  const countryToShow = countries.filter((country) => {
    return country.name.toUpperCase().indexOf(filteredCountries) > -1;
  });

  //fetching data from the api
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      // console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  console.log(countryToShow);
  return (
    <div className="App">
      <div className="search">
        Search country: <input onChange={handleSearch} type="text" />
      </div>
      <div className="show-countries">
        {countryToShow.length >= 250 ? (
          <p>Please enter a country to know about....</p>
        ) : countryToShow.length >= 20 ? (
          <p>Too many matches, specify another filter</p>
        ) : countryToShow.length === 1 ? (
          countryToShow.map((country) => {
            let pop = parseInt(country.population).toLocaleString();
            return (
              <div key={country.name}>
                <div className="country-header" key={country.name}>
                  <h2>{country.name}</h2>
                  <div className="flag-image">
                    <img src={country.flag} alt="flag" />
                  </div>
                </div>
                <div className="country-info">
                  <div>
                    <p>
                      Capital:{" "}
                      <span className="capital">{country.capital}</span>{" "}
                    </p>
                    <p>
                      Population: <span className="population">{pop}</span>{" "}
                    </p>
                  </div>
                  <div className="language">
                    <h3>Languages</h3>
                    <div>
                      {country.languages.map((language) => {
                        return <li key={language.name}>{language.name}</li>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          countryToShow.map((country) => {
            return searchedCountry.length ? (
              <div className="country-list" key={country.name}>
                <span onClick={() => setSearchedCountry(country.name)}>
                  {country.name}
                </span>
              </div>
            ) : (
              <div></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
