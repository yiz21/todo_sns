import Axios from "./Axios";

export const login = async ({ email, password }) => {
  try {
    const res = await Axios.post(`/api/auth/login`, {
      email,
      password,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await Axios.get(`/api/auth/logout`);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts`);

    return res.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    let res = await Axios.get(`/api/v1/posts`);
    return res.data.posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};