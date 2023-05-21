import { useState, useEffect } from "react";

import "../../styles/BreedDetails.css";
import Details from "./Details";
import Images from "./Images";
import { fetchBreedImagesById } from '../../api';

const BreedDetails = ({ allBreeds, selectedBreedId }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    const fetchImages = async () => {
      try {
        const response = await fetchBreedImagesById(selectedBreedId);
        setIsLoading(false)
        setImages(response.data.map(image => image.url))
      } catch (error) {
        console.error('An error occurred while fetching breed images by id:', error);
      }
    };

    fetchImages();
  }, [selectedBreedId]);

  const breedDetails = allBreeds.find(breed => breed.id === selectedBreedId)
  const { name } = breedDetails

  return (
    <div className="breed-details-container" data-testid='breed-details'>
      <h1>Details</h1>
      <h2>Breed: {name}</h2>
      <Details breedDetails={breedDetails} images={images} isLoading={isLoading} />
      {images.length > 1 &&
        <>
          <h2>Other Images of {name}</h2>
          {isLoading ? <h3>Loading images..</h3> : <Images images={images.slice(1)} />}
        </>
      }
    </div>
  )
}

export default BreedDetails;
