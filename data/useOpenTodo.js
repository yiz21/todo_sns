import useSWR from "swr";
import { getOpenTodos } from '../requests/api'

export default function useOpenTodo() {
  const { data, error, mutate } = useSWR("get_open_todos", getOpenTodos);
  const loading = !data && !error;

  return {
    loading,
    openTodos: data,
    mutate,
  };
}