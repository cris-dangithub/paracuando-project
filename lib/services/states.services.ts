import useSWR from 'swr';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { CountryQueries } from '../interfaces/countries.interface';
const useGetStates = (dataQueries: CountryQueries) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(`/states/${queries}`);
  return {
    states: data,
    errorStates: error,
    isLoadingStates: isLoading,
    mutateStates: mutate,
  };
};

export { useGetStates };
