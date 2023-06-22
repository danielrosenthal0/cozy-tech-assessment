import React from "react";


const Pages = ({ totalPages, onPageChange, currentPage }) => {
  const pagesDisplayed = 5;
  const pageButtons = [];

  //range
  let start = Math.max(currentPage - Math.floor(pagesDisplayed / 2), 1);
  let end = Math.min(start + pagesDisplayed - 1, totalPages);

  start = Math.max(end - pagesDisplayed + 1, 1);

  for (let page = start; page <= end; page++) {
    pageButtons.push(
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageButtons}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pages;

