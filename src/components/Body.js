import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState, useEffect } from 'react'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  
  
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