import { convertDigitToStar } from "../../lib/breedDetails";

const Details = ({ breedDetails, image, isLoading }) => {
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

  return (
    <div className="cat-details-container">
      <div className="cat-details">
        <ul>
          <li className="detail-info">
            <b>Temperament:</b> {temperament}
          </li>
          <li className="detail-info">
            <b>Origin:</b> {origin}
          </li>
          <li className="detail-info">
            <b>Life Span:</b> {life_span}
          </li>
          <li className="detail-info">
            <b>Adaptability:</b> {convertDigitToStar(adaptability)}
          </li>
          <li className="detail-info">
            <b>Affection Level:</b> {convertDigitToStar(affection_level)}
          </li>
          <li className="detail-info">
            <b>Child Friendly:</b> {convertDigitToStar(child_friendly)}
          </li>
          <li className="detail-info">
            <b>Grooming:</b> {convertDigitToStar(grooming)}
          </li>
          <li className="detail-info">
            <b>Intelligence:</b> {convertDigitToStar(intelligence)}
          </li>
          <li className="detail-info">
            <b>Health Issue:</b> {convertDigitToStar(health_issues)}
          </li>
          <li className="detail-info">
            <b>Social Needs:</b> {convertDigitToStar(social_needs)}
          </li>
          <li className="detail-info">
            <b>Stranger Friendly:</b> {convertDigitToStar(stranger_friendly)}
          </li>
        </ul>
      </div>
      <div className="cat-image">
        {isLoading ? <h3>Loading image..</h3> : <img src={image} className="main-image" alt={name} />}
      </div>
    </div>
  )
}

export default Details;
