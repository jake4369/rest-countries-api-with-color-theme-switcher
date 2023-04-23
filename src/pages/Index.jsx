import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountriesData } from "../utils/api";
import { LoadedContext } from "../context/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const Index = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadedContext);
  const [allCountries, setAllCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const data = await getCountriesData(searchedCountry);
      setAllCountries(data);
      setIsLoaded(true);
    };
    fetchData();
  }, [searchedCountry]);

  const allCountryCards = [...allCountries].map((country) => {
    return (
      <AnimatePresence key={country.name.common}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to={`/details/${country.name.common}`}>
            <CountryCard country={country} />
          </Link>
        </motion.div>
      </AnimatePresence>
    );
  });

  return (
    <div className="index-page">
      <div className="search__flex-container">
        <SearchBar setSearchedCountry={setSearchedCountry} />

        <p>Placeholder</p>
      </div>

      {isLoaded ? (
        <div className="index-page__flex-container">{allCountryCards}</div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Index;
