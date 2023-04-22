import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

const Index = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      });
  }, []);

  const allCountryCards = allCountries.map((country) => {
    return <CountryCard key={country.name.common} country={country} />;
  });

  return (
    <div className="index-page">
      <SearchBar />

      <div className="index-page__flex-container">{allCountryCards}</div>
    </div>
  );
};

export default Index;
