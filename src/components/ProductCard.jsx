import React from 'react'

const ProductCard = ({ product, addProductToCart, page , removeFromCart}) => {
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

                    <button onClick={() => removeFromCart(product.id)} className='bg-blue-400 text-white my-4 px-4 py-3 rounded cursor-pointer'>Remove from Cart</button>
                    :
                    <button onClick={() => addProductToCart(product)} className='bg-blue-400 text-white my-4 px-4 py-3 rounded cursor-pointer'>Add to Cart</button>
            }


        </div>

    )
}

export default ProductCard
