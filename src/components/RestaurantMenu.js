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

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <div className='res-image'>
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <div className="res-header-details">
          <h1>{name}</h1>
          {/* <h3>{locality}</h3> */}
          <h3>{areaName}</h3>
          <p className="cuisines">Cuisines: {cuisines.join(', ')}</p>
          <div className="info">
            <p className="star">⭐{avgRating}</p>
            <p>({totalRatingsString}) &nbsp;||</p>
            <p className="cost">{costForTwoMessage} &nbsp;||</p>
            <p className="delivery-time">⏳ {sla.slaString}</p>
          </div>
        </div>
      </div>

      {/* <div className="menu-section">
        <h2>Menu</h2>
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs
              {item.card.info.price / 100} ./-
            </li>
          ))}
        </ul>
      </div> */}
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
// because it makes our code more clean and readable
// we can reuse it in other components as well
// in case, there is some issue with let's say fetching data, or any custom hook...
// we just need to check that file, it wont affect other components
