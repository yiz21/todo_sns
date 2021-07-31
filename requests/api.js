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

export const getPosts = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts/1`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
