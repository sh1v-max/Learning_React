import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props

  const {
    cloudinaryImageId,
    name,
    avgRating,
    // minDeliveryTime,
    costForTwo,
    cuisines,
    area,
    slaString,
    locality,
    id,
  } = resData?.data

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="res-info">
          <span className="res-rating">⭐ {avgRating}</span>
          <span className="res-distance">• {slaString}</span>
          <span className="res-price">• ₹{costForTwo / 100} for two</span>
        </div>
        <h4 className="res-cuisine">{cuisines.join(', ')}</h4>
        {/* <h4 className="res-location">{locality}</h4> */}
        <h4 className="res-location">{area}</h4>
      </div>
    </div>
  )
}

export default RestaurantCard;