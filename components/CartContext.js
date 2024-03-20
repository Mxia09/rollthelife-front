import { useState } from "react";

const { createContext } = require("react");

export const CartContext =createContext({});

export function CartContextProvider({children}) {
    const [cartProducts,setCartProducts] = useState([]);
    function addProduct(ProductId) {
        setCartProducts(prev => [...prev, ProductId]);
    }

    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct}}>
            {children}
        </CartContext.Provider>
    );
}