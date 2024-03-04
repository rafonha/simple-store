import { createContext, useState } from "react";

export const AppContext = createContext({});

export default function AppProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (id, title, image, price, quantity) => {
        const checkItemOnList = cartItems.find((items) => {
            return items.id === id;
        });

        if(checkItemOnList !== undefined){
            const findItem = cartItems.find((items) => {
                return items.id === id;
            })

            if (findItem.quantity !== undefined){
                quantity = quantity + findItem.quantity;
            }
            
            const filteredItems = cartItems.filter((items) => {
                return items.id !== id;
            })
            
            setCartItems([...filteredItems, {id, title, image, price, quantity}]);
        } else {
            setCartItems(prevState => [...prevState, {id, title, image, price, quantity}]);
        }
    };

    const removeItemFromCart = (id) => {
        const filteredItems = cartItems.filter((items) => {
            return items.id !== id;
        })
        setCartItems(filteredItems);
    }

    return(
        <AppContext.Provider value={{
            addItemToCart,
            removeItemFromCart,
            cartItems
        }}>
            {children}
        </AppContext.Provider>
    )
}