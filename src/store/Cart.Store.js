import { create } from "zustand";
import data from "../../data.json";

export const useCartStore = create((set, get) => ({
  isClose: true,
  cart: [],
  productos: data,

  toggleClose: () => set((state) => ({ isClose: !state.isClose })),

  resetCart: () => set(() => ({ cart: [] })),

  addItemCart: (newItem) =>
    set((state) => ({
      cart: [...state.cart, newItem],
    })),

  updateItemCart: (updateItem) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === updateItem.name ? { ...updateItem } : item
      ),
    })),
  deleteItemCart: (name) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== name),
    })),
  totalCart: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
