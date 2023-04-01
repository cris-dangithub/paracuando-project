import useSWR from 'swr';
import { BASE_URL } from './BASE_URL';

const usePublications = () => {
  const { data, error, isLoading, mutate } = useSWR(`${BASE_URL}/publications`);
  return { data, error, isLoading, mutate };
};

export { usePublications };
