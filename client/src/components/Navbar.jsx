import "../styles/Navbar.css";
import logo from "../images/logo128.png";

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img className="nav-logo" src={logo} alt="logo" />
    </div>
    <div className="search-bar-container">
      <input className="search-bar" placeholder="Search cat breeds here.." />
      <button className="btn" type="button">Search</button>
    </div>
  </nav>
)

export default Navbar;
