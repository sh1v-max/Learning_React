const RestaurantCategory = ({data}) => {

  console.log(data)
  
  return (
    <div>
      <span>{data.title}</span>
    </div>
  )
}

export default RestaurantCategory;  