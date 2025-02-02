import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex gap-4 bg-gray-800 p-4 shadow-lg">
            <Link to="/" className="text-white text-lg font-semibold hover:text-gray-300 transition">
                Home
            </Link>
            <Link to="/cart" className="text-white text-lg font-semibold hover:text-gray-300 transition">
                Cart
            </Link>
        </div>
    )
}

export default Header
