import useSWR from "swr";
import { getTodos } from '../requests/api'

export default function usePost() {
  const { data, error, mutate } = useSWR("get_todos", getTodos);
  const loading = !data && !error;

  return {
    loading,
    todos: data,
    mutate,
  };
}