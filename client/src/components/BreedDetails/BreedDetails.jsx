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

  const {
    name,
    temperament,
    life_span,
    origin,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly
  } = breedDetails

  const convertDigitToStar = (digit) => {
    switch (digit) {
      case 5:
        return  '* * * * *'
      case 4:
        return '* * * *'
      case 3:
        return '* * *'
      case 2:
        return '* *'
      case 1:
        return '*'
      default:
        break;
    }
  }

  const renderImages = images.slice(1).map((image, index) => {
    return <div><img src={image} className="sub-image" alt={name} key={index} /></div>
  })

  return (
    <div className="breed-details-container">
      <h1>Details</h1>
      <h2>Breed: {name}</h2>
      <div className="cat-details-container">
        <div className="cat-details">
          <ul>
            <li className="detail-info"><b>Temperament:</b> {temperament}</li>
            <li className="detail-info"><b>Origin:</b> {origin}</li>
            <li className="detail-info"><b>Life Span:</b> {life_span}</li>
            <li className="detail-info"><b>Adaptability:</b> {convertDigitToStar(adaptability)}</li>
            <li className="detail-info"><b>Affection Level:</b> {convertDigitToStar(affection_level)}</li>
            <li className="detail-info"><b>Child Friendly:</b> {convertDigitToStar(child_friendly)}</li>
            <li className="detail-info"><b>Grooming:</b> {convertDigitToStar(grooming)}</li>
            <li className="detail-info"><b>Intelligence:</b> {convertDigitToStar(intelligence)}</li>
            <li className="detail-info"><b>Health Issue:</b> {convertDigitToStar(health_issues)}</li>
            <li className="detail-info"><b>Social Needs:</b> {convertDigitToStar(social_needs)}</li>
            <li className="detail-info"><b>Stranger Friendly:</b> {convertDigitToStar(stranger_friendly)}</li>
          </ul>
        </div>
        <div className="cat-image">
          <img src={images[0]} className="main-image" alt={name} />
        </div>
      </div>
      <h2>Other Images of {name}</h2>
      <div className="grid-container">
        {renderImages}
      </div>
    </div>
  )
}

export default BreedDetails;
