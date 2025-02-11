import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'


const CartPage = ({  setCartItems }) => {
  const cartItems = useSelector(state =>state.cartReducer.cartItems)

  return (
    <div className="flex flex-wrap items-center justify-center">
      {
        cartItems && cartItems.map(item => <ProductCard key={item.id} product={item} page={'cart'} />)
      } 
    </div>
  )
}

export default CartPage
