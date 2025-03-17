import Shimmer from './Shimmer'
import './RestaurantMenu.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { MENU_API} from '../utils/constants'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  const {resId} = useParams()
  console.log(resId)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId)
    const json = await data.json()
    // console.log(json.data?.cards[2]?.card?.card?.info)

    setResInfo(json?.data)
  }

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

  // console.log(itemCards)

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
