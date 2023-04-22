import { useState } from "react";

const SearchBar = ({ setSearchedCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm !== "") {
      setSearchedCountry(searchTerm);
      setSearchTerm("");
    } else {
      setSearchedCountry("");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-btn"></button>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
