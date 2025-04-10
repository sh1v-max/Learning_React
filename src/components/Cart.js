import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  const dispatch = useDispatch()
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
