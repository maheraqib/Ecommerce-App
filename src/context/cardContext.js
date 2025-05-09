import AsyncStorage from "@react-native-async-storage/async-storage";
import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {loadCartItem()}, []);

    const  loadCartItem = async () => {
        let carts = await AsyncStorage.getItem("carts");
        carts = carts? JSON.parse(carts) : [];
        setCarts(carts);
        totalSum(carts);
    };

    const addToCart = async (item) => {
        const itemIndex = carts.findIndex((cart) => cart.id === item.id);
        let newCartItem = [];
      
        if (itemIndex === -1) {
          // First time adding
          newCartItem = [...carts, { ...item, quantity: 1 }];
        } else {
          newCartItem = carts.map((cart, index) =>
            index === itemIndex
              ? { ...cart, quantity: cart.quantity + 1 }
              : cart
          );
        }
      
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItem));
        setCarts(newCartItem);
        totalSum(newCartItem);
      };
      
      
      const deleteItemFromCart = async (item) => {
        const newItems = carts.filter((cart) => cart.id !== item.id);
        await AsyncStorage.setItem("carts", JSON.stringify(newItems));
        setCarts(newItems);
        totalSum(newItems); // Use newItems
      };
      

      const totalSum = (cartItems) => {
        const total = cartItems.reduce((amount, item) => {
          return amount + parseFloat(item.price) * (item.quantity || 1);
        }, 0);
        setTotalPrice(total);
      };
      
      const increaseQuantity = async (item) => {
        const newCart = carts.map((cart) =>
          cart.id === item.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );
        await AsyncStorage.setItem("carts", JSON.stringify(newCart));
        setCarts(newCart);
        totalSum(newCart);
      };
      
      const decreaseQuantity = async (item) => {
        let newCart = carts.map((cart) =>
          cart.id === item.id
            ? { ...cart, quantity: cart.quantity > 1 ? cart.quantity - 1 : 1 }
            : cart
        );
        await AsyncStorage.setItem("carts", JSON.stringify(newCart));
        setCarts(newCart);
        totalSum(newCart);
      };
      

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart,
        increaseQuantity,
        decreaseQuantity,
    };
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}