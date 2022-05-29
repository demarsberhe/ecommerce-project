import React from "react";
import "./category-item.scss"
const CategoryItem = props=>{
  const {title, imgURL} = props;
  return (
    <div className="category-container">
      <div 
          className="background-image" 
          style={{
          backgroundImage: `url(${imgURL})`
        }} //this applies custom style to each individual html element, allowing the background image to be specific for each title
          />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  )
}
export default CategoryItem;