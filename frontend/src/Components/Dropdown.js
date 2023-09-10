import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dropdown = ({ item }) => {
  const [items, setItems] = useState([]);
  const [limitItems, setLimitItems] = useState([]);
  console.log(item);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/get-${item}`);
        const { data } = response;
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
        <li key='more'>
            <button
              className="dropdown-item text-dark fw-bold"
              onClick={() => {
                navigate(`/`);
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
