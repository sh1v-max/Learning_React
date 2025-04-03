import { IMG_CDN_URL } from "../utils/constants"
import "../css/restaurantCard.css"

const RestaurantCard = (props) => {
  const { resData } = props
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    minDeliveryTime,
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
        className="res-img"
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="res-info">
          <span className="res-rating">⭐ {avgRating }</span>
          <span className="res-distance">• {sla.slaString}</span>
          <span className="res-price">• {costForTwo}</span>
        </div>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        <h4 className="res-location">{areaName}</h4>
      </div>
    </div>
  )
}

// higher order component is a function that takes a component as input and returns a new component
// input - RestaurantCard
// output - RestaurantCard with discount offer if available else normal RestaurantCard
export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props

    return (
      // <div className="w-[250px] h-[300px] bg-white rounded-[8px] shadow-md cursor-pointer overflow-hidden hover:scale-[0.98] relative">
      <div className="discount-container">
        {/* Check if discount info is available and render it */}
        {aggregatedDiscountInfoV3 && (
          // <div className="text-gray-50 text-xl font-extrabold absolute top-[55%] left-[2px]">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>
          <div className="discount">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</div>
        )}
        <RestaurantCard {...props} />
        {/* Render the original RestaurantCard with all its props */}
      </div>
    )
  }
}

export default RestaurantCard;
