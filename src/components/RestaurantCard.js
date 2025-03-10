import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props

  // console.log(resData)
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    // minDeliveryTime,
    costForTwo,
    cuisines,
    areaName,
    sla,
    locality,
    id,
  } = resData.info

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
          <span className="res-distance">• {sla.deliveryTime} Min</span>
          <span className="res-price">• {costForTwo}</span>
        </div>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        {/* <h4 className="res-location">{locality}</h4> */}
        <h4 className="res-location">{areaName}</h4>
      </div>
    </div>
  )
}

export default RestaurantCard;