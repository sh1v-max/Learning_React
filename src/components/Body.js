import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
  // console.log('body rerendering')
  //! every time the state variable changes, the component will rerender
  //! the react triggers reconciliation cycle
  //~ react does rerender process very fast

  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState('')

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
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  //? this is known as conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

  //? can also be written as
  // return listOfRestaurants.length === 0 ? <Shimmer/> : (
  //   <div className="body"></div>
  // )

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            //! this is important, observe the code below
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant card and update the UI
              // we'll get the value from input field
              console.log(searchText)
            }}
          >
            Search
          </button>
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
