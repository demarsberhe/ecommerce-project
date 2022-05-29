import "./category-item.scss"
import {Link} from "react-router-dom";

const CategoryItem = props=>{
  const {title, imgURL} = props;
  return (<div className="category-container">
      <div 
          className="background-image" 
          style={{
          backgroundImage: `url(${imgURL})`
        }} //this applies custom style to each individual html element, allowing the background image to be specific for each title
          />
        <div className="category-body-container">
        <Link to={`/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
        </div>
      </div>
  )
}
export default CategoryItem;