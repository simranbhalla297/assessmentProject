import React from "react";
import { FaSort } from "react-icons/fa";
function Sorting({ sort, sortClick }) {
  return (
    <div>
      <h5>Sort By:</h5>
      <select
        onChange={sortClick}
        className="sort_dropdown selectBox "
        value={sort}
      >
        <option value="">sort</option>
        <option value="sort by rating">sort by rating</option>
        <option value="sort by reviewer">sort by reviewer</option>
        <option value="sort by usefulness">sort by usefulness</option>
      </select>
    </div>
  );
}

export default Sorting;
