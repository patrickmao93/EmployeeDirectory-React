import axios from "axios";

const RandomAPI = axios.create({
  baseURL: "https://randomuser.me/api/"
});

export default RandomAPI;
