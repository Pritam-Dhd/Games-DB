import React from "react";
import axios from "axios";

export const fetchCategoryData = async ({ category }) => {
  try {
    const response = await axios.get(`http://localhost:5000/get-${category}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGamesData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/get-games");
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
