import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { ApiService } from 'app/services/ApiService';
// import { useStore } from 'app/store';

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const GetUserDetails = () => {
  const staffRequestService = ApiService.createInstance();
  return useQuery(['UserDetails'], async () => {
    const response: AxiosResponse = await staffRequestService.getCharacters();
    return response.data;
  });
};
export const getUsers = async (query: string) => {
  return axios.get('http://localhost:3000/users?' + query);
};
