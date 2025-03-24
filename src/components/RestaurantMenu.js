import Shimmer from './Shimmer'
import '../css/RestaurantMenu.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { MENU_API} from '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
  //^ we don't need this anymore
  // const [resInfo, setResInfo] = useState(null)
  const {resId} = useParams()

  //& using out custom hook useRestaurantMenu.js
  const resInfo = useRestaurantMenu(resId)

  //& as resInfo was used for fetching and getting data... 
  //& so we can remove the below code and use the useRestaurantMenu.js file which is a custom hook
  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId)
  //   const json = await data.json()
  //   setResInfo(json?.data)
  // }

  if (resInfo === null) return <Shimmer />

  const {
    name,
    avgRating,
    areaName,
    costForTwoMessage,
    cuisines,
    sla,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h1>{name}</h1>
        <p className="rating">
          ⭐ {avgRating} ({totalRatingsString})
        </p>
        <p className="cost">{costForTwoMessage}</p>
        <p className="cuisines">Cuisines: {cuisines.join(', ')}</p>
        <p className="delivery-time">⏳ {sla.slaString}</p>
      </div>
      <div className="menu-section">
        <h2>Menu</h2>
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li key = {item.card.info.id}>
              {item.card.info.name}  - Rs 
              {item.card.info.price / 100} ./-
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu

// ! after creating custom hook, out code looks more clean (without comments obv)