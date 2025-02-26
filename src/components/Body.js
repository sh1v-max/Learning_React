import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log('Button clicked')
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Body
