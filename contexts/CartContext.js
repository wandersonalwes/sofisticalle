import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { CartReducer, sumItems } from './CartReducer';
import Cookies from 'js-cookie';

import { useRouter } from 'next/router';

export const CartContext = createContext({});

var storage = [];

if (process.browser) {
  var storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
const initialState = { cartItems: storage, ...sumItems(storage) }


export default function CartProvider({ children }) {
  const [whatsapp, setWhatsapp] = useState('');

  const { query } = useRouter();

  useEffect(() => {
    if (query.whatsapp !== undefined) {
      Cookies.set('whatsapp', `${query.whatsapp}`);
    }
    setWhatsapp(Cookies.get('whatsapp') ? Cookies.get('whatsapp') : '');
  }, [query.whatsapp]);

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

  const checkout = payload => {
    console.log('CHECKOUT', state);
    dispatch({ type: 'CHECKOUT' })
  }

  const contextValues = {
    addProduct,
    increase,
    decrease,
    removeProduct,
    checkout,
    whatsapp,
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
