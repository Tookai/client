import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5500/api",
  /*     timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'} */
});

export const createPost = (post) => Axios.post("/post/post", post).then((res) => res.data);

export const selectPost = (param) => Axios.get(`/post${param}`).then((res) => res.data);

export const updatePost = ({id, content}) => Axios.put(`/post/update/${id}`, content).then((res) => res.data);

export const deletePost = (id) => Axios.delete(`/post/delete/${id}`).then((res) => res.data);

// -----------
// --------------
// -----------

export const createUser = (user) => Axios.post("/user/register", user).then((res) => res.data);

export const loginUser = (user) => Axios.post("/user/login", user).then((res) => res.data);

export const selectAllUsers = () => Axios.get("/user/all").then((res) => res.data);

export const selectOneUser = (id) => Axios.get(`/user/${id}`).then((res) => res.data);

export const updateUserPic = ({ id, pictures }) => Axios.put(`/user/update/pictures/${id}`, pictures).then((res) => res.data);

export const updateUserInfos = ({ id, user }) => Axios.put(`/user/update/infos/${id}`, user).then((res) => res.data);

export const updateUserCredentials = ({ id, cred }) => Axios.put(`/user/update/credentials/${id}`, cred).then((res) => res.data);

export const deleteUser = (id) => Axios.delete(`/user/delete/${id}`).then((res) => res.data);
