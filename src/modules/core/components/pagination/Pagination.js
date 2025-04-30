import React from "react";
import "./pagination.css";

const Pagination = ({
  currentPage,
  totalpages,
  totalElements,
  pageSize,
  paginate,
}) => {
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

  /**
   * "size": 10,
    "totalElements": 14,
    "totalPages": 2,
    "number": 1
   */

  return (
    <div className="pagination">
      <div className="pagination-contents">
        <ul>
          {currentPage > 0 && (
            <li>
              <button onClick={() => paginate(currentPage - 1)}>Prev</button>
            </li>
          )}
          {/* {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button>{number}</button>
              </li>
            );
          })} */}
          {
            /**
   * "size": 10,
    "totalElements": 14,
    "totalPages": 2,
    "number": 1
   */

            (currentPage + 1) * pageSize < totalElements && (
              <li>
                <button onClick={() => paginate(currentPage + 1)}>Next</button>
              </li>
            )
          }
        </ul>
        <p>Page {currentPage + 1}</p>
      </div>
    </div>
  );
};

export default Pagination;
