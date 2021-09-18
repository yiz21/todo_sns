import Axios from "./Axios";

export const login = async ({ email, password }) => {
  try {
    const res = await Axios.post(`/auth/sign_in`, {
      email,
      password,
    });
    return res
  } catch (error) {
    throw error;
  }
};

export const signUp = async ({ email, password }) => {
  try {
    const res = await Axios.post(`/auth`, {
      email,
      password,
      confirm_success_url: '/'
    });
    return res
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    await Axios.delete(`/auth/sign_out`);
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    let res = await Axios.get(`/api/v1/users/session_check`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    let res = await Axios.get(`/api/v1/todos`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getTodo = async (key, id) => {
  try {
    let res = await Axios.get(`/api/v1/todos/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getOpenTodos = async () => {
  try {
    let res = await Axios.get(`/api/v1/open_todos`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const openTodoIine = async (openTodoId) => {
  try {
    let res = await Axios.post(`/api/v1/open_todos/${openTodoId}/iine`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async ({ id, todo }) => {
  try {
    const res = await Axios.patch(`/api/v1/todos/${id}`, {
      todo,
    });
    return res
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await Axios.delete(`/api/v1/todos/${id}`);
    return res
  } catch (error) {
    throw error;
  }
};

export const postTodo = async (todo) => {
  try {
    const res = await Axios.post(`/api/v1/todos`, todo);
    return res
  } catch (error) {
    throw error;
  }
};

export const doneTodo = async (id) => {
  try {
    const res = await Axios.post(`/api/v1/todos/${id}/done`);
    return res
  } catch (error) {
    throw error;
  }
};