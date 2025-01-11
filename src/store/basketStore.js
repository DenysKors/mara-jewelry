import { create } from 'zustand';

export const useBasketStore = create(set => ({
  products: [],
  totalPrice: 0,
  addProduct: product =>
    set(state => ({
      products: [...state.products, product],
      totalPrice: state.totalPrice + product.price,
    })),
  removeProduct: product =>
    set(state => ({
      products: state.products.filter(item => item.code !== product.code),
      totalPrice: state.totalPrice - product.price,
    })),
}));
