import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountriesData, getCountriesByRegion } from "../utils/api";
import { LoadedContext } from "../context/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const Index = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadedContext);
  const [allCountries, setAllCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [region, setRegion] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const modalDisplay = {
    display: modalOpen ? "block" : "none",
  };

  const toggleModalDisplay = () => {
    setModalOpen((prevState) => !prevState);
  };

  const handleSearchRegion = (e) => {
    setRegion(e.target.dataset.region);
    setModalOpen(false);
  };

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      let data;
      if (region) {
        data = await getCountriesByRegion(region);
      } else {
        data = await getCountriesData(searchedCountry);
      }
      setAllCountries(data);
      setIsLoaded(true);
    };
    fetchData();
  }, [searchedCountry, region]);

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

        <div className="dropdown-container">
          <button className="dropdown-btn" onClick={toggleModalDisplay}>
            Filter by Region <BsChevronDown />
          </button>

          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ul className="dropdown-modal" style={modalDisplay}>
                <li data-region="africa" onClick={handleSearchRegion}>
                  Africa
                </li>
                <li data-region="americas" onClick={handleSearchRegion}>
                  America
                </li>
                <li data-region="asia" onClick={handleSearchRegion}>
                  Asia
                </li>
                <li data-region="europe" onClick={handleSearchRegion}>
                  Europe
                </li>
                <li data-region="oceania" onClick={handleSearchRegion}>
                  Oceania
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
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
