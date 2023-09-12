import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategoryData } from "../Api/FetchApi";

const Dropdown = ({ item }) => {
  const [items, setItems] = useState([]);
  const [limitItems, setLimitItems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetchCategoryData({ category: item })
      .then((data) => {
        setItems(data);
        setLimitItems(data.slice(0, 6));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategoryData({ category: item });
        setItems(data);
        setLimitItems(data.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <li className="nav-item dropdown ">
      <a
        className="nav-link dropdown-toggle text-white text-capitalize"
        href="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {item}
      </a>
      <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
        {limitItems.map((item, index) => (
          <li key={index}>
            <button
              className="dropdown-item text-dark"
              onClick={() => {
                navigate(`/`);
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
        <li key="more">
          <button
            className="dropdown-item text-dark fw-bold"
            onClick={() => {
              navigate(`/${item}`);
            }}
          >
            Show More ...
          </button>
        </li>
      </ul>
    </li>
  );
};

export default Dropdown;
