import axios from "axios";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async (name = "") => {
  try {
    const url = name ? `/name/${name}` : "/all";
    const countries = await countriesApi.get(url);

    return countries.data;
  } catch (error) {
    console.error(error);
  }
};
