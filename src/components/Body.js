import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Body = () => {
  return (
    <div className="res-container">
      {resList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      })}
    </div>
  )
}

export default Body;