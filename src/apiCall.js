import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5500/api",
  /*     timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'} */
});

export const selectPost = (param) => Axios.get(`/post${param}`).then((res) => res.data);

export const createPost = (post) => Axios.post("/post/post", post).then((res) => res.data);

export const createUser = (user) => Axios.post("/user/register", user).then((res) => res.data);

export const loginUser = (user) => Axios.post("/user/login", user).then((res) => res.data);
