import Shimmer from './Shimmer'
import { IMG_CDN_URL } from '../utils/constants'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { MdStarRate } from 'react-icons/md'
import RestaurantCategory from './RestaurantCategory'
// import { RestaurantCategory } from './RestaurantCategory'
import '../css/RestaurantMenu.css'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {}

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //   console.log(itemCards)

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
  // console.log(cards)

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || []

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        // card?. is same as ["card"]?. in the object
        // we can not write @type directly, so we use ['@type']
        c?.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )
  // console.log(categories)

  return (
    <div className="restaurant-container">
      {/* <RestaurantCategory /> */}
      <div className="restaurant-header">
        <img
          className="res-image"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <div className="res-header-details">
          <h1>{name}</h1>
          <h3>{areaName}</h3>
          <p className="cuisines">Cuisines: {cuisines.join(', ')}</p>

          <div className="info">
            <MdStarRate
              className="w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[5px] text-[#eceaea]"
              style={
                avgRatingString > 4.0
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'red' }
              }
            />

            <span>
              {avgRatingString || 3.8} ({totalRatingsString || '1K+ ratings'})
              &nbsp;•
            </span>
            <p className="cost">{costForTwoMessage} &nbsp;•</p>
            <p className="delivery-time">⏳ {sla.slaString}</p>
          </div>
        </div>
      </div>

      {/* Creating Category Accordion */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}

      {/* {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            avgRating,
            ratings,
            imageId,
            description,
          } = item.card.info
          // console.log(`id: ${id}`)
          // console.log(`name: ${name}`)
          // console.log(`price: ${price}`)
          // console.log(`defaultPrice: ${defaultPrice}`)
          // console.log(`avgRating: ${avgRating}`)
          // console.log(`ratings: ${ratings}`)
          return (
            <div key={id} className="menu-items">
              <div className="left">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>
                  {(description && description.slice(0, 60)) || 'Dummy Data'}
                </p>
                <h4 className="rating">
                  <p className="star">
                    ⭐{ratings?.aggregatedRating?.rating || 3.8}
                  </p>
                  <p>({ratings?.aggregatedRating?.ratingCountV2 || 6})</p>
                </h4>
              </div>
              <div className="right">
                <img src={IMG_CDN_URL + imageId} alt={name} />
                <button className="add-btn">ADD</button>
              </div>
            </div>
          )
        })
      ) : (
        <h2>No items available</h2>
      )} */}
    </div>
  )
}

export default RestaurantMenu

//& as resInfo was used for fetching and getting data...
//& we can create a custom hook useRestaurantMenu.js and use it in this component (see commented code)
//& and later on, we can use out custom hook here and other components as well (if needed)
// using hook here 👇
// const resInfo = useRestaurantMenu(resId)
//? why creating custom hook is better?
// because it makes our code more clean and readable
// we can reuse it in other components as well
// in case, there is some issue with let's say fetching data, or any custom hook...
// we just need to check that file, it wont affect other components
