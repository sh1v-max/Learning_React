import Shimmer from './Shimmer'
import { useEffect, useState } from 'react'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836&catalog_qa=undefined&submitAction=ENTER'
    )
    const json = await data.json()
    console.log(json.data?.cards[2]?.card?.card?.info)
    setResInfo(json?.data)
  }

  const { 
    name, 
    avgRating, 
    areaName, 
    costForTwoMessage, 
    cuisines, 
    sla, 
    totalRatingsString
  } =  resInfo?.cards[2]?.card?.card?.info || 'Loading...'

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{avgRating}⭐ ({totalRatingsString})</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>Cuisines:- {cuisines.join(", ")}</h4>
      <h4>Delivery time:- {sla.slaString}</h4>
      <h4>{}</h4>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu
