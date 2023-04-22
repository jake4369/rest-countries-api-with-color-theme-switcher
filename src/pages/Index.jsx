import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../utils/api";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

const Index = () => {
  const [allCountries, setAllCountries] = useState([]);

  // Get all countries data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCountries();
      setAllCountries(data);
    };
    fetchData();
  }, []);

  const allCountryCards = allCountries.map((country) => {
    return (
      <Link to={`/details/${country.name.common}`} key={country.name.common}>
        <CountryCard country={country} />
      </Link>
    );
  });

  return (
    <div className="index-page">
      <SearchBar />

      <div className="index-page__flex-container">{allCountryCards}</div>
    </div>
  );
};

export default Index;
