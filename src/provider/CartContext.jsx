import React, { createContext, useState, useContext } from 'react';

// Create a context for the shopping cart
export const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const [cartProduct, setCartProduct] = useState([]);

  // Add item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  // Update quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart  }}>
      {children}
    </CartContext.Provider>
  );
};
