import { create } from 'zustand';

export const useBasketStore = create(set => ({
  products: [],
  addProduct: product =>
    set(state => ({ products: [...state.products, product] })),
}));
