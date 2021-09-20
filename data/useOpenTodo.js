import useSWR from "swr";
import { getOpenTodos } from '../requests/api'

export default function useOpenTodo() {
  const { data, error, mutate } = useSWR("get_open_todos", getOpenTodos);
  const openTodoLoading = !data && !error;

  return {
    openTodoLoading,
    openTodos: data,
    mutate,
  };
}