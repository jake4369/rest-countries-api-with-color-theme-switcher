import axios from "axios";

const countriesApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async () => {
  try {
    const countries = await countriesApi.get("/all");

    return countries.data;
  } catch (error) {
    console.error(error);
  }
};
