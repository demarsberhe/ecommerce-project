import "./Header.styles.scss";
const Header = ()=>{
  return(
    <nav className="navigation-container">
    <h1>May Favorites</h1>
      <ul className="navigation-items">
        <li>About</li>
        <li>Brands</li>
      </ul>
    </nav>
  )
}
export default Header;