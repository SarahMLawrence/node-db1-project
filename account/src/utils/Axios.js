import axios from "axios";

export const Axios = () => {
  return axios.create({
    baseUrl: "http://localhost:5000",
  });
};
