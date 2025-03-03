import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {

  // let listOfRestaurants = [
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
  // ]

  //? using useState to store the list of restaurants
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
  
  //? now using our mock data
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  //& useState(resList) returns an array of objects
  // so we can destructure as shown above, we can also write as
  // const arr = useState(resList)
  // const listOfRestaurants = arr[0]
  // const setListOfRestaurants = arr[1]
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          // onClick={() => {
          //   listOfRestaurants = listOfRestaurants.filter(
          //     (res) => res.data.avgRating > 4
          //   )
          //   console.log(listOfRestaurants)
          // }}
          //? using useState to update the list of restaurants
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