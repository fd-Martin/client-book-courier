import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-book-courier.vercel.app",
});

import React from "react";

const useAxios = () => {
  return instance;
};

export default useAxios;