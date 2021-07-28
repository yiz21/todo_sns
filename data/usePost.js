import useSWR from "swr";
import { getPosts } from '../requests/api'

export default function usePost() {
  const { data, error, mutate } = useSWR("get_posts", getPosts);
  const loading = !data && !error;

  return {
    loading,
    posts: data,
    mutate,
  };
}