import React from "react";
import Header from "../Components/Header";
import Category from "../Components/Category";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { item } = useParams();
  return (
    <>
      <Header />
      <Category category={item} />
    </>
  );
};

export default Categories;
