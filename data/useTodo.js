import useSWR from "swr";
import { getTodos, getTodo } from '../requests/api'

export default function useTodos() {
  const { data, error, mutate } = useSWR("get_todos", getTodos);
  const loading = !data && !error;

  return {
    loading,
    todos: data,
    mutate,
  };
}

export const useTodo = (id) => {
  const { data, error, mutate } = useSWR([`get_todo/${id}`, id], getTodo);
  const loading = !data && !error;
  return {
    loading,
    todo: data,
    mutate,
  };
}