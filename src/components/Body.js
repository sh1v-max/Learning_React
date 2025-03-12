import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  
  useEffect(() => {
    // console.log('useEffect called')
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1].info)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  //? this is known as conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

  //? can also be written as
  // return listOfRestaurants.length === 0 ? <Shimmer/> : (
  //   <div className="body"></div>
  // )

  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className='search-btn'/>
          <button>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            )
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Button
        </button>
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