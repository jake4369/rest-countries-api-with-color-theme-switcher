import axios from "axios";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

const sortData = (dataArr) => {
  return dataArr.sort((a, b) => {
    const countryA = a.name.common;
    const countryB = b.name.common;

    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });
};

export const getCountriesData = async (name = "") => {
  try {
    const url = name ? `/name/${name}` : "/all";
    const countries = await countriesApi.get(url);

    if (countries.data.length === 0) {
      throw new Error("Country not found");
    }

    return sortData(countries.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCountryData = async (name = "") => {
  try {
    const url = name ? `/name/${name}?fullText=true` : "/all";
    const countries = await countriesApi.get(url);

    if (countries.data.length === 0) {
      throw new Error("Country not found");
    }

    return sortData(countries.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCountriesByCode = async (code) => {
  try {
    const url = `/alpha/${code}`;
    const country = await countriesApi.get(url);

    return country.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCountriesByRegion = async (region = "") => {
  try {
    const url = region ? `/region/${region}` : "/all";
    const countries = await countriesApi.get(url);
    return countries.data;
  } catch (error) {
    console.error(error);
  }
};
