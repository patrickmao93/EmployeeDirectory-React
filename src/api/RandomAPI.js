import axios from "axios";
// RandomAPI
const RandomAPI = axios.create({
  baseURL: "https://randomuser.me/api/"
});

export default RandomAPI;
