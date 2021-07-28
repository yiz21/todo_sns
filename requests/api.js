import Axios from "./Axios";

export const login = async ({ email, password }) => {
  try {
    const res = await Axios.post(`/auth/sign_in`, {
      email,
      password,
    });
    console.log(res.data);
    return res
  } catch (error) {
    console.log(error);
    return error
  }
};

export const logOut = async () => {
  try {
    await Axios.delete(`/auth/sign_out`);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    let res = await Axios.get(`/api/v1/users/session_check`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPost = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts/1`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
