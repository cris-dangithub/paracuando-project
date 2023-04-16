import useSWR from 'swr';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { CountryQueries } from '../interfaces/countries.interface';
const useGetCountries = (dataQueries: CountryQueries) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(`/countries/${queries}`);
  return {
    countries: data,
    errorCountries: error,
    isLoadingCountries: isLoading,
    mutateCountries: mutate,
  };
};

export { useGetCountries };
