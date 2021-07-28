import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_HOST,
});

Axios.interceptors.response.use(response => {
  // console.log('--response--');
  // console.log(response);
  // console.log(response.headers["access-token"]);
  // console.log(response.headers["uid"]);
  // console.log(response.headers["client"]);
  if (response.headers['access-token'] != null) {
    localStorage.setItem('access-token', response.headers['access-token']);
  }
  if (response.headers['client'] != null) {
    localStorage.setItem('client', response.headers.client);
  }
  if (response.headers['uid'] != null) {
    localStorage.setItem('uid', response.headers.uid);
  }
  return response
})

Axios.interceptors.request.use(config => {
  // console.log('--request--');
  // console.log(localStorage.getItem('access-token'));
  // console.log(localStorage.getItem('uid'));
  // console.log(localStorage.getItem('client'));
  config.headers = {
    'access-token': localStorage.getItem('access-token') ,
    'uid': localStorage.getItem('uid') ,
    'client': localStorage.getItem('client')
  }
  return config;
});

export default Axios;