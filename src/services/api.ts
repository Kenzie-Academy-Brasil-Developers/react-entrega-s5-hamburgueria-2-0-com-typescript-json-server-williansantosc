import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-fake-api.herokuapp.com",
});

export default api;
