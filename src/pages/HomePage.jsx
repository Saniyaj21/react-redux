import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import React from "react";

const HomePage = ({cartItems, setCartItems}) => {

    const [product, setProduct] = useState([])
    

    const getProducts = async () => {
        let products = await axios.get('https://dummyjson.com/products');
        setProduct(products.data.products)
        console.log(products);
    }


    console.log(cartItems);
    const addProductToCart = (product) => {
        setCartItems([...cartItems, product])
        alert("Product added to cart")
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <h1 className="text-center  text-2xl text-blue-400 my-4 font-bold">Get the latest products here.</h1>
            <div className="flex flex-wrap items-center justify-center">
                {
                    product && product.map(p => <ProductCard 
                        key={p.id}
                        product={p}
                        addProductToCart={addProductToCart} />
                    )
                }
            </div>
        </div>
    )
}

export default HomePage
