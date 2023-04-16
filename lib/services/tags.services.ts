import useSWR from 'swr';
import axios from '../helpers/axios.helper.';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { AddTag, GetTags, UpdateTag } from '../interfaces/tags.interface';

const useTags = (dataQueries: GetTags) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(`/tags/${queries}`);
  return {
    tags: data,
    errorTags: error,
    isLoadingTags: isLoading,
    mutateTags: mutate,
  };
};

const addTag = (data: AddTag) => {
  return axios.post(`/tags`, data);
};

const useTagById = (tagID: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/tags/${tagID}`);
  return {
    tag: data,
    errorTag: error,
    isLoadingTag: isLoading,
    mutateTag: mutate,
  };
};

const deleteTag = (tagID: string) => {
  return axios.delete(`/tags/${tagID}`);
};

const updateTag = (tagID: string, data: UpdateTag) => {
  return axios.put(`/tags/${tagID}`, data);
};

export { useTags, addTag, useTagById, deleteTag, updateTag };
