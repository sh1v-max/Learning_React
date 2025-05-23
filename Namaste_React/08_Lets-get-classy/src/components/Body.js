import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import '../css/Body.css'

const Body = () => {
  console.log(useState())
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'
    )

    const json = await data.json()
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  const handleSearch = () => {
    console.log(searchText)
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredRestaurants(filtered)
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-btn"
          placeholder="Search for restaurant name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="title-container">
            <p className="title">Recommended top restaurant chains</p>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={'/restaurant/' + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
