import axios from "axios";

const API = axios.create({
  baseURL: "https://9bks5mkpy6.execute-api.ap-south-1.amazonaws.com/Prod",
});

export default API;