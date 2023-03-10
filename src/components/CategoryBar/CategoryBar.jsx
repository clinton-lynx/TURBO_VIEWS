import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Categories } from "../../utils/Categories";
import "./category-bar.scss";
// import

const CategoryBar = ({ categories, setCategory }) => {
    console.log(categories);


  return (
    <div className="category-list-wrapper">
      <div onClick={() => console.log(categories)} className="categories">
        <ul className="category-list">
          {Categories.map((category) => (
            <li className="category">
              <Link
                to={"/"}
                onClick={() => setCategory(category)}
                className={category === categories ? "active" : "inactive"}
              >
                <span className="category-name">{category}</span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
      </div>
  );
};

export default CategoryBar;
