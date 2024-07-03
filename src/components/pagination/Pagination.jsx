import { React, useEffect, useState } from "react";

import "./pagination.css";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

    const [navActive, setNavActive] = useState(true);
    const [selected, setSelected] = useState(1);

//   console.log(postPerPage);
//   console.log(totalPosts);

  for (let i = 1; i <= Math.ceil(totalPosts / 6); i++) {
    pageNumbers.push(i);
  }
useEffect (() => {
    if (pageNumbers.length <= 1) {
        setNavActive(false);
      } else {
        setNavActive(true);
      }

      if (currentPage = 2) {
        setSelected(2)
      }

}, [pageNumbers])

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={navActive === false ? "active_nav" : "page_item"}
          >
            <a
              onClick={() => paginate(number)}
              href="#gallary"
              className="page_link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
