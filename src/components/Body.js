import RestaurantCard from './RestaurantCard'
// import resList from '../utils/mockData'
import { useState, useEffect } from 'react'

const Body = () => {

  useEffect(() => {
    // console.log('useEffect called')
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  const [listOfRestaurants, setListOfRestaurants] = useState([])

  return (
    <div className="body">
      <div className="filter">
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            )
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Button
        </button> */}
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body