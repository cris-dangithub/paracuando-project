import useSWR from 'swr';
import axios from '../helpers/axios.helper.';
import { fetcher } from '../helpers/fetcher.helper';

const usePublications = () => {
  const { data, error, isLoading, mutate } = useSWR(`/publications`, fetcher);
  return {
    publications: data,
    errPublications: error,
    loaderPublications: isLoading,
    mutPublications: mutate,
  };
};

const addPubliction = (data: any) => {
  return axios.post(`/publications`, data);
};

const usePublicationsById = (publicationID: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/publications/${publicationID}`,
    fetcher
  );
  return {
    publication: data,
    errPublication: error,
    loaderPublication: isLoading,
    mutPublication: mutate,
  };
};

const deletePublication = (publicationID: string) => {
  return axios.delete(`/publications/${publicationID}`);
};

const votePublication = (publicationID: string) => {
  return axios.post(`/publications/${publicationID}/vote`);
};

const addImagePublication = (publicationID: string, image: any) => {
  return axios.post(`/publications/${publicationID}/add-image`, image);
};

const removeImagePublication = (publicationID: string, order: string) => {
  return axios.delete(`/publications/${publicationID}/remove-image/${order}`);
};

export {
  usePublications,
  addPubliction,
  usePublicationsById,
  deletePublication,
  votePublication,
  addImagePublication,
  removeImagePublication,
};
