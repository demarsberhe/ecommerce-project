import "./Header.styles.scss";
import {Link} from "react-router-dom";
const Header = ()=>{
  return(
    <nav className="navigation-container">
    <h1 className="page-title"><Link to="/">June Favorites</Link></h1>
      <ul className="navigation-items">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/auth">Sign-In</Link></li>
      </ul>
    </nav>
  )
}
export default Header;