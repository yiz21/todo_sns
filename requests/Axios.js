import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://todo-sns-backend.herokuapp.com/',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
});

Axios.interceptors.response.use(response => {
  console.log(response.headers["access-token"]);
  console.log(response.headers["uid"])
  console.log(response.headers["client"])
  return response
})

// Axios.interceptors.request.use(
//   config => {
//     return authTokens().then(tokens => {
//       if (tokens) {
//         config.headers.common["access-token"] = tokens["access-token"];
//         config.headers.common["uid"] = tokens["uid"];
//         config.headers.common["client"] = tokens["client"];
//       }
//       return config;
//     });
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default Axios;