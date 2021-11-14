import React, { useState, createContext, useContext } from 'react'
import useSWR from "swr";
import { 
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo,
  doneTodo,
  shareTodo,
  importTodo
} from '../requests/api'
import { Snack } from '../data/snack';

export const Todo = createContext({
  current: [],
  loading: false,
  reinitialize: () => {},
  updateTodo: () => {},
  updateLocalTodo: () => {},
  deleteTodo: () => {},
  createTodo: () => {}
});

const TodoContext = ({ children }) => {
  const { data, error, mutate } = useSWR("get_todos", getTodos);
  const loading = !data && !error;
  const snack = useContext(Snack);

  const _createTodo = async (todo) => {
    const _todos = data;
    _todos.push(todo);
    mutate(_todos, false);

    try {
      await postTodo({ todo });
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '更新でエラーが発生しました' });
    }
  }

  const _updateTodo = async (todo) => {
    let _todos = data;
    _todos = _todos.map(t => {
      if (t.id == todo.id) {
        t = todo;
        return t;
      }
      return t;
    });
    mutate(_todos, false);

    try {
      await updateTodo({ id: todo.id, todo });
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '更新でエラーが発生しました' });
    }
  }

  const _updateLocalTodo = async (todo) => {
    let _todos = data;
    _todos = _todos.map(t => {
      if (t.id == todo.id) {
        t = todo;
        return t;
      }
      return t;
    });
    mutate(_todos, false);
  }

  const _deleteTodo = async (todo) => {
    const _todos = data.filter(t => t.id != todo.id);
    mutate(_todos, false);

    try {
      await deleteTodo(todo.id);
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '通信でエラーが発生しました' });
    }
  }

  const _doneTodo = async (todo) => {
    try {
      await doneTodo(todo.id);
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '通信でエラーが発生しました' });
    }
  }

  const _shareTodo = async (todo) => {
    try {
      await shareTodo(todo.id);
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '通信でエラーが発生しました' });
    }
  }

  const _importTodo = async (openTodo) => {
    try {
      await importTodo(openTodo.id);
      mutate();
    } catch (error) {
      snack.snackOn({ kind: 'error', message: '通信でエラーが発生しました' });
    }
  }

  return (
    <Todo.Provider
      value={{
        current: data,
        loading,
        reinitialize: () => mutate(),
        createTodo: (todo) => _createTodo(todo),
        updateTodo: (todo) => _updateTodo(todo),
        updateLocalTodo: (todo) => _updateLocalTodo(todo),
        deleteTodo: (todo) => _deleteTodo(todo),
        doneTodo: (todo) => _doneTodo(todo),
        shareTodo: (todo) => _shareTodo(todo),
        importTodo: (openTodo) => _importTodo(openTodo),
      }}
    >
      {children}
    </Todo.Provider>
  )
}

export default TodoContext;