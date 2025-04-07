import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

  console.log(data)
  
  return (
    <div className="">
      {/* Accordion Header */}
      <div className="flex border-b border-gray-200 justify-between items-center my-4 py-4 px-2 shadow-lg bg-gray-100 cursor-pointer">
        <span className="text-l font-extrabold">{data.title} ({data?.itemCards?.length})</span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      <ItemList items = {data?.itemCards}/>
    </div>
  )
  
}

export default RestaurantCategory;  