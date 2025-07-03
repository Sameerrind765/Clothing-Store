import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  incrementItem: (id: number, size: string, color: string) => void;
  decrementItem: (id: number, size: string, color: string) => void;
  removeItem: (id: number, size: string, color: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      // Find if the same product (with same size and color) exists
      const existingIndex = prev.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );

      if (existingIndex !== -1) {
        // If found increase quantity and update totalPrice
        const updatedCart = [...prev];
        const existingItem = updatedCart[existingIndex];
        updatedCart[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
          totalPrice:
            (existingItem.quantity + item.quantity) * existingItem.price,
        };
        return updatedCart;
      } else {
        // If not found, add as new item
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementItem = (id: number, size: string, color: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  const decrementItem = (id: number, size: string, color: string) => {
    setCartItems((items) =>
      items.flatMap((item) => {
        if (item.id === id && item.size === size && item.color === color) {
          if (item.quantity === 1) {
            // Remove item
            return [];
          }
          return [
            {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            },
          ];
        }
        return [item];
      })
    );
  };

  const removeItem = (id: number, size: string, color: string) => {
    setCartItems((items) =>
      items.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
