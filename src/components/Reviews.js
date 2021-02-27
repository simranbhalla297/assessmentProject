import React from "react";
import { Button } from "react-bootstrap";

import Review from "./Review";

function Reviews({ Result, currentPage, nextpage }) {
  console.log(Result);

  const itemPerPage = 3;

  const pages = [];
  for (let i = 1; i <= Math.ceil(Result.length / itemPerPage); i++) {
    pages.push(i);
    //console.log(pages);
  }

  //index
  const indexOfLastItems = currentPage * itemPerPage;

  const indexOfFirstItems = 0;
  const currentItems = Result.slice(indexOfFirstItems, indexOfLastItems);

  const loadmore = () => {
    if (currentPage === pages[pages.length - 1]) {
      alert("No more items");
      return;
    } else {
      nextpage(currentPage);
    }
  };
  let html;
  if (Result.length !== 0) {
    html = (
      <div className="load_btn">
        <Button className="morebtn" onClick={loadmore}>
          More
        </Button>
      </div>
    );
  } else {
    html = null;
  }
  return (
    <div>
      <div className="reviews_container">
        {currentItems.map((item) => {
          return (
            <div>
              <Review key={item} items={item} />
            </div>
          );
        })}
      </div>

      {html}
    </div>
  );
}

export default Reviews;
