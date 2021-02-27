import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Reviews from "./Reviews";
import Sorting from "./Sorting";
function Selecte() {
  const [currentPage, setCurrentPage] = useState(1);
  const [product, setProduct] = useState("");
  const [viewer, setViewer] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [sortedResult, setSortedResult] = useState([]);
  const onSortClick = (e) => {
    console.log(e.target.value);
    setSortValue(e.target.value);
  };
  console.log(result);
  //console.log(sortedResult);
  const sortItems = () => {
    console.log(result);
    if (sortValue === "") {
      setSortedResult(result);
    } else if (sortValue === "sort by rating") {
      var sorted = result.sort(compareRatings);
      setSortedResult(sorted);
    } else if (sortValue === "sort by reviewer") {
      var sorted = result.sort(sortbyReviewer);
      setSortedResult(sorted);
    } else if (sortValue === "sort by usefulness") {
      var sorted = result.sort(sortbyUsefulness);
      setSortedResult(sorted);
    }
  };

  //sortbyRating
  const compareRatings = (reviewA, reviewB) => {
    const ratingA = reviewA.ratings.Overall;
    const ratingB = reviewB.ratings.Overall;
    let comparison = 0;
    if (ratingA > ratingB) {
      comparison = -1;
    } else if (ratingA < ratingB) {
      comparison = 1;
    }
    return comparison;
  };
  //sortbyreviewer
  const sortbyReviewer = (reviewA, reviewB) => {
    const ratingA = reviewA.reviewer.connection_level;
    const ratingB = reviewB.reviewer.connection_level;
    let comparison = 0;
    if (ratingA > ratingB) {
      comparison = -1;
    } else if (ratingA < ratingB) {
      comparison = 1;
    }
    return comparison;
  };

  //sortbyUsefulness
  const sortbyUsefulness = (reviewA, reviewB) => {
    const ratingA = reviewA.usefulness;
    const ratingB = reviewB.usefulness;
    let comparison = 0;
    if (ratingA > ratingB) {
      comparison = -1;
    } else if (ratingA < ratingB) {
      comparison = 1;
    }
    return comparison;
  };
  const handleproductSelect = (e) => {
    console.log(e.target.value);
    setProduct(e.target.value);
  };
  const handleviewerSelect = (e) => {
    console.log(e.target.value);
    setViewer(e.target.value);
  };

  const onSubmit = () => {
    console.log("clicked");
    setProduct(product);
    setViewer(viewer);

    setResult([]);
    setSortedResult([]);
    setLoading(true);
    fetchSelectedData(product, viewer);
  };
  const productOptions = () => {
    var arr = [];

    for (let i = 1; i <= 20; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };
  const viewerOptions = () => {
    var arr = [];

    for (let i = 1; i <= 10; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };

  //fetch data

  async function fetchSelectedData(product, viewer) {
    console.log(`product ${product} id ${viewer}`);
    let response = await fetch(
      `http://www.i2ce.in/reviews/${product}/${viewer}`
    );
    let data = await response.json();
    console.log(data.reviews);
    setResult(data.reviews);

    setTimeout(function () {
      sortItems();
      alert("after");
    }, 500);

    setCurrentPage(1);
    setLoading(false);

    //console.log(result);
  }

  const update = (currentPage) => {
    console.log(currentPage);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="select">
        <div className="product_dropdown">
          <h5>Select Product ID</h5>
          <select
            onChange={handleproductSelect}
            value={product}
            className="selectBox"
          >
            <option value="">select</option>
            {productOptions()}
          </select>
        </div>
        <div className="Viewer_dropdown">
          <h5>Select Viewer ID</h5>
          <select
            onChange={handleviewerSelect}
            value={viewer}
            className="selectBox"
          >
            <option value="">select</option>
            {viewerOptions()}
          </select>
        </div>
        <div className="sort_container">
          <Sorting sort={sortValue} sortClick={onSortClick} />
        </div>
        <div className="btn">
          <Button variant="primary" onClick={onSubmit} className="submitBtn">
            Submit
          </Button>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="loading">
            <Spinner animation="grow" variant="info" />
          </div>
        ) : null}
      </div>
      <div className="reviews">
        <Reviews
          Result={sortedResult}
          currentPage={currentPage}
          nextpage={update}
        />
      </div>
    </div>
  );
}
export default Selecte;
