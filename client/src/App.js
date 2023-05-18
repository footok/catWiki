import { useState, useEffect } from "react";

import * as api from './api'
import { Navbar, BreedDetails } from "./components";
import "./App.css";

const App = () => {
  const [breedOptions, setBreedOptions] = useState([{value: '', label: ''}]);
  const [allBreeds, setAllBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await api.fetchBreeds();
        setAllBreeds(response.data)
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
    <div className="App">
      <Navbar
        breedOptions={breedOptions}
        allBreeds={allBreeds}
        setSelectedBreedId={setSelectedBreedId}
      />
      {selectedBreedId &&
        <BreedDetails
          allBreeds={allBreeds}
          selectedBreedId={selectedBreedId}
        />
      }
    </div>
  );
}

export default App;
