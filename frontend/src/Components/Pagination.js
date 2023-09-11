import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate an array of page numbers based on the total number of pages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            className={`page-item ${
              currentPage === pageNumber ? "active" : ""
            }`}
            key={pageNumber}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
