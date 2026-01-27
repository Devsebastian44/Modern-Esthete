"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
    id: string | number;
    name: string;
    price: number;
    image: string;
    category?: string;
    variant?: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartCount: number;
    cartSubtotal: number;
    addToCart: (product: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string | number) => void;
    updateQuantity: (id: string | number, delta: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load from localStorage
    useEffect(() => {
        const loadSavedCart = () => {
            const savedCart = localStorage.getItem("cart_items");
            if (savedCart) {
                try {
                    const parsed = JSON.parse(savedCart);
                    setCartItems(parsed);
                } catch (e) {
                    console.error("Failed to parse cart items", e);
                }
            }
        };

        // Use setTimeout to move the state update to the next tick, 
        // avoiding the synchronous update warning in some environments.
        // Alternatively, we could initialize the state from localStorage if not for SSR.
        const timer = setTimeout(loadSavedCart, 0);
        return () => clearTimeout(timer);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("cart_items", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const addToCart = (product: Omit<CartItem, "quantity">) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string | number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string | number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, cartSubtotal, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
