const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt="" className="country-card__flag-img" />

      <div className="country-card__text-container">
        <p className="country-card__name">{country.name.common}</p>
        <p className="country-card__stat-title">
          Population:{" "}
          <span className="country-card__stat">
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className="country-card__stat-title">
          Region: <span className="country-card__stat">{country.region}</span>
        </p>
        <p className="country-card__stat-title">
          Capital: <span className="country-card__stat">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
