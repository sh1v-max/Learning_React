import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)
  
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836&catalog_qa=undefined&submitAction=ENTER"
    )
    const json = await data.json()
    console.log(json.data?.cards[2]?.card?.card?.info)
    setResInfo(json.data)
  }

  // const {name} = resInfo
  // if (resInfo === null) {
  //   return <Shimmer/>
  // }
  
  return resInfo === null? <Shimmer/> : (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
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