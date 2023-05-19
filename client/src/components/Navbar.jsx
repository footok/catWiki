import Select from 'react-select';

import "../styles/Navbar.css";
import logo from "../images/logo128.png";

const Navbar = ({ breedOptions, setSelectedBreedId }) => {

  const handleChange = async (selectedOption) => {
    const breedId = selectedOption.value
    setSelectedBreedId(breedId)
  }

  return (
    <nav className="nav-container" data-testid="navbar">
      <div className="logo-container">
        <a href='/'><img className="nav-logo" src={logo} alt="logo" /></a>
      </div>
      <div className="search-bar-container">
        <Select 
          placeholder="Search breeds here.."
          className="search-bar" 
          options={breedOptions} 
          onChange={handleChange}
        />
      </div>
    </nav>
  )
}

export default Navbar;
