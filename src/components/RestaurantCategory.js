import ItemList from './ItemList'

const RestaurantCategory = ({ data }) => {
  // console.log(data)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div className="w-full shadow-md px-[20px] bg-gray-100 rounded-md py-[10px] my-[30px]">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center text-xl font-extrabold cursor-pointer"
          onClick={handleClick}
        >
          <span>{`${data?.title.slice(0, 40)} (${
            data?.itemCards?.length
          })`}</span>
          <div className="text-[30px]">
            <span>⬇️</span>
          </div>
        </div>

        {/* Accordion Body */}
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <div className="flex border-b border-gray-200 justify-between items-center my-4 py-4 px-2 shadow-lg bg-gray-100 cursor-pointer">
  //       {/* Accordion Header */}
  //       <span className="text-l font-extrabold">
  //         {data?.title.slice(0, 40)} ({data?.itemCards?.length})
  //       </span>
  //       <span>⬇️</span>
  //     </div>
  //     {/* Accordion Body */}
  //     <ItemList items={data?.itemCards} />
  //   </div>
  // )
}

export default RestaurantCategory
