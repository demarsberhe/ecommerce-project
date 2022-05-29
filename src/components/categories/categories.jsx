import categoriesList from "./categories-list";
import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item";
const categories = ()=>{
  return (
  <div className="categories-container">
  {categoriesList.map(category =>{
    return <div className="category-container" key={category.id}>
    <CategoryItem 
      imgURL={category.imgURL}
      title= {category.title}
      />
    </div>
    })} 
  </div>
  )
}
export default categories;