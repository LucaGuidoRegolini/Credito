import axios from "axios";

const apiUrl = "https://api-credito.herokuapp.com/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
