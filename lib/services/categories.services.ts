import useSWR from 'swr';
import { CategoriesResponse } from '../interfaces/categories.interface';
function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<CategoriesResponse>(
    '/publications-types'
  );
  return {
    data: data,
    error,
    isLoading,
    mutate,
  };
}

export { useCategories };
