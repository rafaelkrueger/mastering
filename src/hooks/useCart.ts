import { useEffect, useState } from 'react';


const useCart = () => {
    const initialCart = JSON.parse(localStorage.getItem('cart') as unknown as '') || [];
    const [cartItems, setCartItems] = useState(initialCart);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

  const addToCart = (item: any) => {
    for (const itemOnCart of cartItems) {
      if(itemOnCart._id === item._id){
        return null;
      }
    }
    cartItems.filter((prevItem:any)=> prevItem._id !== item._id)
    setCartItems((prevItems: any) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems: any[]) => prevItems.filter((item: { _id: string; }) => item?._id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCartItems((prevItems: any[]) =>
      prevItems.map((item: { id: number; }) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total: number, item: { price: number; }) => total + item?.price, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };
};

export default useCart;