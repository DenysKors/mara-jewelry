import { create } from 'zustand';

const initialState = {
  products: [],
  totalPrice: 0,
};

export const useBasketStore = create(set => ({
  ...initialState,
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
  reset: () => {
    set(initialState);
  },
}));
