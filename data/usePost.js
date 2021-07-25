import useSWR from "swr";
import { getPosts } from '../requests/api'
export default function useUser() {
  const { data, error, mutate } = useSWR("getPosts", getPosts);
  const loading = !data && !error;

  return {
    loading,
    posts: data,
    mutate,
  };
}