import useSWR from 'swr';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { CountryQueries } from '../interfaces/countries.interface';
const useGetCities = (dataQueries: CountryQueries) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(`/cities/${queries}`);
  return {
    cities: data,
    errorCities: error,
    isLoadingCities: isLoading,
    mutateCities: mutate,
  };
};

export { useGetCities };
