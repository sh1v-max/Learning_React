const RestaurantCategory = ({data}) => {

  console.log(data)
  
  return (
    <div className="border-b border-gray-200 py-4 px-2">
      <div className="flex justify-between items-center text-xl font-extrabold cursor-pointer">
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>
    </div>
  )
  
}

export default RestaurantCategory;  