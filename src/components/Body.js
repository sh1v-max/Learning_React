import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState, useEffect } from 'react'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json()
    console.log(json)
  }
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            )
            setListOfRestaurants(filteredList)
            console.log(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Body