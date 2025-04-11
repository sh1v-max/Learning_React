import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  // subscribing to the store using a selector
  // method 1:
  const cartItems = useSelector((store) => store.cart.items)

  // method 2:
  const store = useSelector((store) => store)
  const cartItems2 = store.cart.items
  //  both method 1 and 2 will give the same result
  //  but method 1 is more efficient
  
  console.log(cartItems)

  const dispatch = useDispatch()

  // Clears the cart by dispatching the clearCart action.

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <button
          className="bg-[orange] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[green]"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="text-2xl font-bold">Cart is Empty please add some items</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart
