import React from 'react'

import GlobalStyle from 'src/styles/global'
import 'src/styles/slick.css'

import CartProvider from '../contexts/CartContext'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CartProvider>
  )
}

export default MyApp
