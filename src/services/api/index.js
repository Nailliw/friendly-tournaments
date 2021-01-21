import axios from "axios";

export const api = axios.create({
  // baseURL: "https://tournament-json-server.herokuapp.com",
  baseURL: "http://localhost:3001",
});
