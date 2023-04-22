const InfoSubColumn = ({ country }) => {
  const createCurrenciesList = (currencies) => {
    let currencyList = "";

    Object.keys(currencies).forEach((currency, index, arr) => {
      index === arr.length - 1
        ? (currencyList += `${currencies[currency].name}`)
        : (currencyList += `${currencies[currency].name}, `);
    });

    return currencyList;
  };

  const createLanguageList = (languages) => {
    let languageList = "";

    Object.keys(languages).forEach((language, index, arr) => {
      index === arr.length - 1
        ? (languageList += `${languages[language]}`)
        : (languageList += `${languages[language]}, `);
    });

    return languageList;
  };

  const languageList = country ? createLanguageList(country.languages) : "";
  const currencyList = country ? createCurrenciesList(country.currencies) : "";

  return (
    <div className="info__sub-column">
      <p className="country-card__stat-title">
        Top Level Domain:{" "}
        <span className="country-card__stat">{country.tld[0] || "N/A"}</span>
      </p>

      <p className="country-card__stat-title currencies">
        Currencies: <span className="country-card__stat">{currencyList}</span>
      </p>

      <p className="country-card__stat-title languages">
        Languages: <span className="country-card__stat">{languageList}</span>
      </p>
    </div>
  );
};

export default InfoSubColumn;
