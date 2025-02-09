import React from 'react'
import ProductCard from '../components/ProductCard'


const CartPage = ({ cartItems, setCartItems }) => {

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  return (
    <div className="flex flex-wrap items-center justify-center">
      {
        cartItems && cartItems.map(item => <ProductCard key={item.id} product={item} page={'cart'} removeFromCart={removeFromCart} />)
      }
    </div>
  )
}

export default CartPage
