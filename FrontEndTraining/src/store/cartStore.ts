import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  cartItemsPrice: number;
  cartItemsArray: cartItem[];
  reduceBalance: (price: number) => void;
  addItem: (cartItem: cartItem) => void;
  removeItemByIndex: (index: number) => void;
}

interface cartItem {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const useCartStore = create<CartStore>((set) => ({
  cartCount: 0,
  cartItemsPrice: 0,
  balance: 1000.0,
  cartItemsArray: [],

  reduceBalance: (price: number) =>
    set((state) => ({
      balance: Math.round((state.balance - price) * 100) / 100,
    })),
  addItem: (cartItem: cartItem) =>
    set((state) => ({
      cartCount: state.cartCount + 1,
      cartItemsPrice:
        Math.round((state.cartItemsPrice + cartItem.price) * 100) / 100,
      cartItemsArray: [...state.cartItemsArray, cartItem],
    })),
  removeItemByIndex: (index: number) =>
    set((state) => ({
      cartCount: state.cartCount - 1,
      cartItemsPrice:
        Math.round(
          (state.cartItemsPrice - state.cartItemsArray[index].price) * 100
        ) / 100,
      cartItemsArray: state.cartItemsArray.filter((_, i) => i !== index),
    })),
}));

export default useCartStore;
