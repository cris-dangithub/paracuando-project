import useSWR from 'swr';
import axios from '../helpers/axios.helper.';
import { fetcher } from '../helpers/fetcher.helper';
import { getURLQueries } from '../helpers/queriesURL.helper';
import { GetUsers, UpdateUser } from '../interfaces/user.interface';

const useGetUsers = (dataQueries: GetUsers) => {
  const queries = getURLQueries(dataQueries);
  const { data, error, isLoading, mutate } = useSWR(
    `/users/${queries}`,
    fetcher
  );
  return {
    users: data,
    errorUsers: error,
    isLoadingUsers: isLoading,
    mutateUsers: mutate,
  };
};

const useGetUserByID = (userID: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/users/${userID}`,
    fetcher
  );
  return {
    userById: data,
    errorUserById: error,
    isLoadingUserById: isLoading,
    mutateUserById: mutate,
  };
};

const updateUser = (userID: string, data: UpdateUser) => {
  return axios.put(`/users/${userID}/`, data);
};

const updateUserImage = (userID: string, image?: any) => {
  return axios.post(`/users/${userID}/add-image`, image);
};

const removeUserImage = (userID: string) => {
  return axios.delete(`/users/${userID}/remove-image`);
};

const useGetUserVotes = (userID: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/users/${userID}/votes`,
    fetcher
  );

  return {
    userVotes: data,
    errorUserVotes: error,
    isLoadingUserVotes: isLoading,
    mutateUserVotes: mutate,
  };
};

const useGetUserPublications = (userID?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/users/${userID}/publications`,
    fetcher
  );
  return {
    userPublications: data,
    errorUserPublications: error,
    isLoadingUserPublications: isLoading,
    mutateUserPublications: mutate,
  };
};

export {
  useGetUsers,
  useGetUserByID,
  updateUser,
  updateUserImage,
  removeUserImage,
  useGetUserVotes,
  useGetUserPublications,
};
