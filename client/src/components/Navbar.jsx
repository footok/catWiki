import { useState, useEffect } from "react";
import Select from 'react-select';

import * as api from '../api'
import "../styles/Navbar.css";
import logo from "../images/logo128.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [breedOptions, setBreedOptions] = useState([{value: '', label: ''}]);

  const handleSubmit = async () => {
  }

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await api.fetchBreeds();
        const breedOptions = response.data.map(breed => (
          {
            value: breed.id,
            label: breed.name
          }
        ))
        setBreedOptions(breedOptions);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img className="nav-logo" src={logo} alt="logo" />
      </div>
      <div className="search-bar-container">
        <Select 
          className="search-bar" 
          options={breedOptions} 
        />
      </div>
    </nav>
  )
}

export default Navbar;
