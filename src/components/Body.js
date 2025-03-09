import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState, useEffect } from 'react'

const Body = () => {

  // const [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     type: 'restaurant',
  //     data: {
  //       type: 'F',
  //       id: '81093',
  //       name: 'Dominos',
  //       uuid: '40b0b55b-e9af-43e7-aeae-be1b012d0b1d',
  //       city: '21',
  //       area: 'Athwa',
  //       totalRatingsString: '500+ ratings',
  //       cloudinaryImageId: 'nyp7yrzwc1dc2xqfkydk',
  //       cuisines: ['Ice Cream'],
  //       tags: [],
  //       costForTwo: 25000,
  //       costForTwoString: '₹250 FOR TWO',
  //       deliveryTime: 30,
  //       minDeliveryTime: 30,
  //       maxDeliveryTime: 40,
  //       slaString: '30-40 MINS',
  //       lastMileTravel: 5.599999904632568,
  //       avgRating: 4.5,
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       type: 'F',
  //       id: '81094',
  //       name: 'MCD',
  //       uuid: '40b0b55b-e9af-43e7-aeae-be1b012d0b1d',
  //       city: '21',
  //       area: 'Athwa',
  //       totalRatingsString: '500+ ratings',
  //       cloudinaryImageId: 'nyp7yrzwc1dc2xqfkydk',
  //       cuisines: ['Ice Cream'],
  //       tags: [],
  //       costForTwo: 25000,
  //       costForTwoString: '₹250 FOR TWO',
  //       deliveryTime: 30,
  //       minDeliveryTime: 30,
  //       maxDeliveryTime: 40,
  //       slaString: '30-40 MINS',
  //       lastMileTravel: 5.599999904632568,
  //       avgRating: 3.5,
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       type: 'F',
  //       id: '81092',
  //       name: 'KFC',
  //       uuid: '40b0b55b-e9af-43e7-aeae-be1b012d0b1d',
  //       city: '21',
  //       area: 'Athwa',
  //       totalRatingsString: '500+ ratings',
  //       cloudinaryImageId: 'nyp7yrzwc1dc2xqfkydk',
  //       cuisines: ['Ice Cream'],
  //       tags: [],
  //       costForTwo: 25000,
  //       costForTwoString: '₹250 FOR TWO',
  //       deliveryTime: 30,
  //       minDeliveryTime: 30,
  //       maxDeliveryTime: 40,
  //       slaString: '30-40 MINS',
  //       lastMileTravel: 5.599999904632568,
  //       avgRating: 4.1,
  //     },
  //   },
  // ])

  useEffect(() => {
    console.log('useEffect called')
  }, [])
  
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
