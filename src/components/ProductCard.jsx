import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product, page }) => {
    const status = useSelector(state => state.cartReducer.status)

    const dispatch = useDispatch();
    const addHandler = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added to cart')
    }

    return (
        <div className="bg-white m-4 min-w-[200px] shadow-lg rounded-lg p-4 border border-gray-200 max-w-sm">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>

            {
                page === 'cart' ?

                    <button onClick={() => dispatch(removeFromCart(product.id))} className='bg-blue-400 text-white my-4 px-4 py-3 rounded cursor-pointer'>Remove from Cart</button>
                    :
                    <button onClick={() => addHandler(product)} className='bg-blue-400 text-white my-4 px-4 py-3 rounded cursor-pointer'>Add to Cart</button>

            }


        </div>

    )
}

export default ProductCard
