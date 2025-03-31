import Shimmer from './Shimmer'
import { IMG_CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import '../css/RestaurantMenu.css'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {}

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //   console.log(itemCards)

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || []

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <div className="res-image">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <div className="res-header-details">
          <h1>{name}</h1>
          <h3>{areaName}</h3>
          <p className="cuisines">Cuisines: {cuisines.join(', ')}</p>
          <div className="info">
            <p className="star">⭐{avgRating}</p>
            <p>({totalRatingsString}) &nbsp;•</p>
            <p className="cost">{costForTwoMessage} &nbsp;•</p>
            <p className="delivery-time">⏳ {sla.slaString}</p>
          </div>
        </div>
      </div>

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            avgRating,
            ratings,
            imageId,
            description,
          } = item.card.info
          console.log( `id: ${id}`)
          console.log( `name: ${name}`)
          console.log( `price: ${price}`)
          console.log( `defaultPrice: ${defaultPrice}`)
          console.log( `avgRating: ${avgRating}`)
          console.log( `ratings: ${ratings}`)
          return (
            <div key={id} className="menu-items">
              <div className="left">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>
                  {(description && description.slice(0, 60)) || 'Dummy Data'}
                </p>
                <h4 className="rating">
                  <p className="star">⭐{ratings?.aggregatedRating?.rating || 3.8}</p>
                  <p>({ratings?.aggregatedRating?.ratingCountV2 || 6})</p>
                  {/* {console.log(avgRating)} */}
                  {/* <p>({totalRatingsString}) &nbsp;</p> */}
                </h4>
              </div>
              <div className="right">
                <img src={IMG_CDN_URL + imageId} alt={name} />
                <button className="add-btn">ADD</button>
              </div>
            </div>
          )
        })
      ) : (
        <h2>No items available</h2>
      )}
    </div>
  )
}

export default RestaurantMenu

//& as resInfo was used for fetching and getting data...
//& we can create a custom hook useRestaurantMenu.js and use it in this component (see commented code)
//& and later on, we can use out custom hook here and other components as well (if needed)
// using hook here 👇
// const resInfo = useRestaurantMenu(resId)
//? why creating custom hook is better?
