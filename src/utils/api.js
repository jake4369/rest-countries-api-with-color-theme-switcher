import axios from "axios";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesData = async (name = "") => {
  try {
    const url = name ? `/name/${name}` : "/all";
    const countries = await countriesApi.get(url);

    return countries.data;
  } catch (error) {
    console.error(error);
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
