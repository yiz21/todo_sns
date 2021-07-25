import useSWR from "swr";
import { getUser } from '../requests/api'
export default function useUser() {
  const { data, error, mutate } = useSWR("hoge", getUser);
  // const { data, error, mutate } = useSWR("getPosts", getPosts);

  const loading = !data && !error;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}