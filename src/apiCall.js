import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5500/api",
  /*     timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'} */
});

export const SelectAllPost = () => Axios.get('/post/all').then(res => res.data)