import { useSelector } from "react-redux"
// import ItemList from "./ItemList"
import ItemList from "./ItemList"

const Cart = ()=> {

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)
  
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart