import React, { createContext, useContext, useReducer } from 'react';
// import Cookies from 'js-cookie';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = createContext({});

var storage = [];

if (process.browser) {
  var storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
const initialState = { cartItems: storage, ...sumItems(storage) }

// const initialState = { cartItems: [], ...sumItems([]) }

export default function CartProvider({ children }) {

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = payload => {
    return dispatch({ type: 'ADD_ITEM', payload });
  }
  const increase = payload => {
    dispatch({ type: 'INCREASE', payload });
  }
  const decrease = payload => {
    dispatch({ type: 'DECREASE', payload });
  }

  const removeProduct = payload => {
    dispatch({ type: 'REMOVE_ITEM', payload })
  }

  const contextValues = {
    addProduct,
    increase,
    decrease,
    removeProduct,
    ...state
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
