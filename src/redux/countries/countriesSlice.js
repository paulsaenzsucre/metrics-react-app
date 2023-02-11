import {
  createSelector,
} from '@reduxjs/toolkit';
import { apiSlice } from '../apis/apiSlice';

const selectCountriesResult = apiSlice.endpoints.getCountries.select();

const emptyCountries = [];

const selectAllCountries = createSelector(
  selectCountriesResult,
  (countriesResult) => countriesResult?.data ?? emptyCountries,
);

const selectCountryById = createSelector(
  selectAllCountries,
  (state, countryId) => countryId,
  (countries, countryId) => countries.find((country) => country.cca3 === countryId),
);

export {
  selectAllCountries,
  selectCountryById,
};
