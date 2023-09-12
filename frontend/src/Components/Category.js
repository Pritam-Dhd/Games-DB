import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategoryData } from "../Api/FetchApi";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCategoryData({ category })
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <>
      <h1>
        <p className="m-4">All the {category}</p>
      </h1>
      <p className="">
        {items.map((item, index) => (
          <button
            type="button"
            class="btn category m-4 ps-4 pe-4 pt-3 pb-3 rounded fw-bold"
            onClick={() => {
              navigate(`/${category}/${item.name}`);
            }}
          >
            {item.name}
          </button>
        ))}
      </p>
    </>
  );
};

export default Category;
