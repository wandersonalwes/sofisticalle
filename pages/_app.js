import GlobalStyle from '../styles/global';
import '../styles/slick.css';
import CartProvider from '../contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CartProvider>
  );
}

export default MyApp
