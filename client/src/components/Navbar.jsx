import Select from 'react-select';

import "../styles/Navbar.css";
import logo from "../images/logo128.png";

const Navbar = ({ breedOptions, allBreeds, setSelectedBreedId }) => {

  const handleChange = async (selectedOption) => {
    const breedId = selectedOption.value
    setSelectedBreedId(breedId)
  }

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img className="nav-logo" src={logo} alt="logo" />
      </div>
      <div className="search-bar-container">
        <Select 
          className="search-bar" 
          options={breedOptions} 
          onChange={handleChange}
        />
      </div>
    </nav>
  )
}

export default Navbar;
