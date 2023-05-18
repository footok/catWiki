import { useState, useEffect } from "react";

import "../../styles/BreedDetails.css";
import * as api from '../../api'

const BreedDetails = ({ allBreeds, selectedBreedId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBreedImagesById = async () => {
      try {
        const response = await api.fetchBreedImagesById(selectedBreedId);
        setImages(response.data.map(image => image.url))
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchBreedImagesById();
  }, [selectedBreedId]);


  const breedDetails = allBreeds.find(breed => breed.id === selectedBreedId)
  console.log('breedDetails', breedDetails)


  return (
    <div id="breed-details">
      <h1>Details</h1>
      <h2>Name:{breedDetails.name}</h2>
    </div>
  )
}

export default BreedDetails;
