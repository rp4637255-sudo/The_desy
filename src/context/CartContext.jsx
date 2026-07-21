import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();


export function useCart() {
  return useContext(CartContext);
}


export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("thedesy-cart");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem(
      "thedesy-cart",
      JSON.stringify(cart)
    );
  }, [cart]);


  const addToCart = (product) => {

    setCart((prev) => {

      const exist = prev.find(
        item => item.id === product.id
      );


      if(exist){

        return prev.map(item =>
          item.id === product.id
          ? {...item, qty:item.qty + 1}
          : item
        );

      }


      return [
        ...prev,
        {...product, qty:1}
      ];

    });

  };


  const removeFromCart = (id) => {

    setCart(prev =>
      prev.filter(item => item.id !== id)
    );

  };


  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("thedesy-cart");

  };


  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}
