import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";
import axios from "axios";

const Home = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-games");
        const { data } = response;
        console.log(data);
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(games.length / itemsPerPage);

  // Function to handle page changes
  const onPageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="container mt-5 mb-5 flex-grow-1">
          <div className="row justify-content-evenly">
            {currentItems.map((game, index) => (
              <div className="col-lg-3 col-sm-7 col-md-3 m-2 w-350" key={index}>
                <Card game={game} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
