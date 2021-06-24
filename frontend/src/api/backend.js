import axios from "axios";

const apiUrl = "https://back-credito.herokuapp.com/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
