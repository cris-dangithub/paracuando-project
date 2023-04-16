import useSWR from 'swr';
import axios from '../helpers/axios.helper.';
import {
  CategoriesResponse,
  CategoryPutRequest,
} from '../interfaces/categories.interface';
function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<CategoriesResponse>(
    '/publications-types'
  );
  return {
    categories: data,
    errCategories: error,
    loaderCategories: isLoading,
    mutCategories: mutate,
  };
}

function useCategoryById(publicationType: string) {
  const { data, error, isLoading, mutate } = useSWR(
    `/publications-types/${publicationType}`
  );
  return {
    category: data,
    errCategory: error,
    loaderCategory: isLoading,
    mutCategory: mutate,
  };
}

function updateCategory(publicationType: string, data: CategoryPutRequest) {
  return axios.put(`/publications-types/${publicationType}`, data);
}

export { useCategories, useCategoryById, updateCategory };
