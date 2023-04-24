import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadedContext } from "../context/LoadingContext";
import { BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { getCountryData } from "../utils/api";

import InfoMainColumn from "../components/DetailsPage/InfoMainColumn";
import InfoSubColumn from "../components/DetailsPage/InfoSubColumn";
import BorderCountries from "../components/DetailsPage/BorderCountries";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const Details = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadedContext);
  const { country_name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const data = await getCountryData(country_name);
      setCountry(data[0]);
      setIsLoaded(true);
    };
    fetchData();
  }, [country_name]);

  return (
    <main className="details-page">
      <Link to="/">
        <button className="back-btn">
          <BsArrowLeft className="back-btn__arrow" /> Back
        </button>
      </Link>

      {isLoaded && country !== null ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="details-page__flex-container">
              <img
                src={country.flags.svg || country.flags.png}
                alt=""
                className="details-page__flag-img"
              />

              <div className="details-page__info-container">
                <div className="details-page__column-container">
                  <InfoMainColumn country={country} />

                  <InfoSubColumn country={country} />
                </div>

                <BorderCountries country={country} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
};

export default Details;
