import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalpages, paginate }) => {
  const pageNumbers = [];
  if (currentPage === 1) {
    pageNumbers.push(currentPage);
    if (totalpages >= currentPage + 1) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalpages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  } else if (currentPage > 1) {
    if (currentPage >= 3) {
      pageNumbers.push(currentPage - 2);
      pageNumbers.push(currentPage - 1);
    } else {
      pageNumbers.push(currentPage - 1);
    }

    pageNumbers.push(currentPage);

    if (totalpages >= currentPage + 1) {
      pageNumbers.push(currentPage + 1);
    }
    if (totalpages >= currentPage + 2) {
      pageNumbers.push(currentPage + 2);
    }
  }

  return (
    <div className="pagination">
      <div className="pagination-contents">
        <ul>
          {currentPage > 1 && (
            <li>
              <button
                className={currentPage === 1 ? "highlight" : ""}
                onClick={() => paginate(1)}
              >
                First page
              </button>
            </li>
          )}
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button
                  className={currentPage === number ? "highlight" : ""}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            );
          })}
          {currentPage < totalpages && (
            <li>
              <button
                className={currentPage === totalpages ? "highlight" : ""}
                onClick={() => paginate(totalpages)}
              >
                Last page
              </button>
            </li>
          )}
        </ul>
        <p>Page {currentPage}</p>
      </div>
    </div>
  );
};

export default Pagination;
