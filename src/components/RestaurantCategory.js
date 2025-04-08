import { useState } from 'react'
import ItemList from './ItemList'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  // const [showItems, setShowItems] = useState(false)
  // console.log(data)


  const handleClick = () => {
    setShowIndex()
  }
  // lifting state up

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
            {showItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data?.itemCards} />}
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
