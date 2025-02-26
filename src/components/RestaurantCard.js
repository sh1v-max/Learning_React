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
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"
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