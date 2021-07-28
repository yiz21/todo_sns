import useSWR from "swr";
import { getUser } from '../requests/api'

export default function useUser() {
  const { data, error, mutate } = useSWR("get_user", getUser);
  const loading = !data && !error;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}