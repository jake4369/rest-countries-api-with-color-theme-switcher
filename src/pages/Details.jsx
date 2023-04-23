import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { getCountriesData } from "../utils/api";

import InfoMainColumn from "../components/DetailsPage/InfoMainColumn";
import InfoSubColumn from "../components/DetailsPage/InfoSubColumn";
import BorderCountries from "../components/DetailsPage/BorderCountries";

const Details = () => {
  const { country_name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountriesData(country_name);
      setCountry(data[0]);
    };
    fetchData();
  }, [country_name]);

  return (
    <div className="details-page">
      <Link to="/">
        <button className="back-btn">
          <BsArrowLeft className="back-btn__arrow" /> Back
        </button>
      </Link>

      {country === null ? (
        <p>Error</p>
      ) : (
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
      )}
    </div>
  );
};

export default Details;
