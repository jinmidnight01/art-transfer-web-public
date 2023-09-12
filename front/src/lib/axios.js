import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/",
  // baseURL: "proxy/",
  // baseURL: "http://localhost:8000/",

  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    // "Access-Control-Request-Method" : "POST",
    // crossDomain: true,
  },
});

export default instance;
