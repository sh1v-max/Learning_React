import { IMG_CDN_URL } from '../utils/constants'
import '../css/restaurantCard.css'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const RestaurantCard = (props) => {
  const { resData } = props
  const { loggedInUser } = useContext(UserContext)

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
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-details">
        <h3 className="res-name">
          {name.length > 23 ? name.slice(0, 20) + '...' : name.slice(0, 24)}
        </h3>
        <div className="res-info">
          <span className="res-rating">⭐ {avgRating}</span>
          <span className="res-distance">• {sla.slaString}</span>
          <span className="res-price">• {costForTwo}</span>
        </div>
        <h4 className="res-cuisine">
          {cuisines.join(', ').length > 32
            ? cuisines.join(', ').slice(0, 28) + '...'
            : cuisines.join(', ').slice(0, 32)}
        </h4>
        <h4 className="res-location">{areaName}</h4>
        {/* <h4 className="res-location">{loggedInUser}</h4> */}
      </div>
    </div>
  )
}

// higher order component is a function that takes a component as input and returns a new component
// input - RestaurantCard
// output - RestaurantCard with discount offer if available else normal RestaurantCard
export const withDiscountOffer = (RestaurantCard) => {
  // HOC takes a component as input and returns a new component
  // input - RestaurantCard
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info
    // console.log(aggregatedDiscountInfoV3)

    return (
      <div className="relative inline-block">
        {/* Discount Label */}
        {aggregatedDiscountInfoV3 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm !px-3 !py-1.5 rounded-md shadow-md z-10 font-medium">
            {`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}
          </div>
        )}

        {/* Original Card */}
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard
