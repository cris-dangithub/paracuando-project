import useSWR from 'swr';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { CountryQueries } from '../interfaces/countries.interface';
const useGetRoles = (dataQueries: CountryQueries) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(`/roles/${queries}`);
  return {
    roles: data,
    errorRoles: error,
    isLoadingRoles: isLoading,
    mutateRoles: mutate,
  };
};

export { useGetRoles };
