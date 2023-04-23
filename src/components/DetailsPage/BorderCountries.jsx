import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCountriesByCode } from "../../utils/api";

const BorderCountries = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);

  const bordersArr = country?.borders;

  useEffect(() => {
    const getBorderCountries = async () => {
      const borderCountriesData = [];
      for (const border of bordersArr) {
        const countryData = await getCountriesByCode(border);
        borderCountriesData.push(...countryData);
      }
      setBorderCountries(borderCountriesData);
    };

    if (bordersArr?.length) {
      getBorderCountries();
    }
  }, [bordersArr]);

  const borderButtons =
    borderCountries.length > 0 ? (
      borderCountries.map((country) => {
        return (
          <Link
            key={country.name.common}
            to={`/details/${country.name.common}`}
          >
            <button className="border-countries__btn">
              {country.name.common}
            </button>
          </Link>
        );
      })
    ) : (
      <p>No bordering countries</p>
    );

  return (
    <div className="border-countries">
      <h2 className="border-countries__heading">Border Countries:</h2>

      <div className="border-countries__btn-container">{borderButtons}</div>
    </div>
  );
};

export default BorderCountries;
