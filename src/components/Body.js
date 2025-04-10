import RestaurantCard, { withDiscountOffer } from './RestaurantCard'
import { useState, useEffect, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import '../css/Body.css'
import { GiLogging } from 'react-icons/gi'

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const onlineStatus = useOnlineStatus()
  const [tempUserName, setTempUserName] = useState('')

  // HOC for RestaurantCard with discount offer
  const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  if (onlineStatus === false)
    return (
      <h1 className="offline">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    )

  const handleSearch = () => {
    console.log(searchText)
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredRestaurants(filtered)
  }

  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName)
    }
    setTempUserName('') // Clear the input box after submission
  }

  const { loggedInUser, setUserName } = useContext(UserContext)

  return (
    <div className="body">
      <div className="search">
        {/* <label>Username: </label> */}
        <input
          type="text"
          placeholder="Enter User name..."
          value={tempUserName}
          onChange={(e) => setTempUserName(e.target.value)}
        />
        <button onClick={handleUserNameSubmit}>Submit</button>
        {/* <button>User</button> */}
      </div>
      {/* <div className="search">
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
      </div> */}

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
                {
                  // If restaurant has discount offer then show discount offer else without discount
                  restaurant.info.aggregatedDiscountInfoV3 ? (
                    // console.log(restaurant.info.aggregatedDiscountInfoV3),
                    <RestaurantCardWithDiscount resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )
                }
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
