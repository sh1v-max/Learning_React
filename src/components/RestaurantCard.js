import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  // cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  deliveryTime,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {CDN_URL}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{area}</h4>
      <span>
        <h4> Rating : {avgRating} Stars</h4>
        <h4>{lastMileTravelString}</h4>
        <h5>{deliveryTime} Min</h5>
        <h5>{costForTwoString}</h5>
      </span>
    </div>
  )
}

export default RestaurantCard;