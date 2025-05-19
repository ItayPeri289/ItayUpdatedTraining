import { create } from "zustand";

interface CartStore {
  cartCount: number;
  balance: number;
  cartItemsPrice: number;
  itemsArray: cartItem[];
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
  itemsArray: [],

  reduceBalance: (price: number) =>
    set((state) => ({
      balance: Math.round((state.balance - price) * 100) / 100,
    })),
  addItem: (cartItem: cartItem) =>
    set((state) => ({
      cartCount: state.cartCount + 1,
      cartItemsPrice:
        Math.round((state.cartItemsPrice + cartItem.price) * 100) / 100,
      itemsArray: [...state.itemsArray, cartItem],
    })),
  removeItemByIndex: (index: number) =>
    set((state) => ({
      cartCount: state.cartCount - 1,
      cartItemsPrice:
        Math.round(
          (state.cartItemsPrice - state.itemsArray[index].price) * 100
        ) / 100,
      itemsArray: state.itemsArray.filter((_, i) => i !== index),
    })),
}));

export default useCartStore;
