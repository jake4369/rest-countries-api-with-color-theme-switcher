const InfoMainColumn = ({ country }) => {
  const createNativeNamesList = (names) => {
    // let namesList = [];
    let namesList = "";

    Object.keys(names).forEach((name, index, arr) => {
      index === arr.length - 1
        ? (namesList += `${names[name].common}`)
        : (namesList += `${names[name].common}, `);
    });

    return namesList;
  };

  const nativeNames = country
    ? createNativeNamesList(country.name.nativeName)
    : "";

  return (
    <div className="info__main-column">
      <h1 className="details-page__country-name">{country.name.common}</h1>

      <p className="country-card__stat-title">
        Native Name: <span className="country-card__stat">{nativeNames}</span>
      </p>
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
        Sub Region:{" "}
        <span className="country-card__stat">{country.subregion}</span>
      </p>
      <p className="country-card__stat-title">
        Capital: <span className="country-card__stat">{country.capital}</span>
      </p>
    </div>
  );
};

export default InfoMainColumn;
