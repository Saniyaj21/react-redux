import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';


const HomePage = ({ cartItems, setCartItems }) => {
    const products = useSelector(state => state.productReducer.products)
    const dispatch = useDispatch()

  


    useEffect(() => {
        dispatch(getProducts())
        // toast.success('Products fetched successfully!');
    }, [])


    return (
        <div>
            <h1 className="text-center  text-2xl text-blue-400 my-4 font-bold">Get the latest products here.</h1>
            <div className="flex flex-wrap items-center justify-center">
                {
                    products && products.map(p => <ProductCard
                        key={p.id}
                        product={p}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default HomePage
