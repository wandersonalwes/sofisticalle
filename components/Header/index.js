import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../contexts/CartContext';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { formatMoney } from '../../utils';
import Button from '../Button';
import apiConfig from '../../config/api';

import { Container, IconMenu, IconFavorites, IconCart, Cart } from './styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, cartItems, increase, decrease, removeProduct, total, checkout } = useCart();

  const checkoutMessage = () => {
    const productList = cartItems.map(item => {
      return `${item.quantity} ${item.name}: Valor ${formatMoney(item.price)}%0D%0D%0A%0D%0D%0A`
    });

    return `Olá! *Aqui está a lista de produtos que desejo comprar:*%0D%0D%0A%0D%0D%0A${productList}*O valor total é:* ${formatMoney(total)}%0D%0D%0A%0D%0D%0AObrigado(a)!
    `
  }

  return (
    <Container>
      <button>
        <IconMenu />
      </button>

      <Link href={{ pathname: '/' }}>
        <a>
          <img src="/logo.svg" alt="Sofisticalle" />
        </a>
      </Link>

      <div>
        {/* <Link href={{ pathname: '/' }}>
          <a>
            <IconFavorites />
          </a>
        </Link> */}
        <button onClick={() => setIsOpen(true)} className="total-products-in-cart-wrapper">
          <IconCart />
          <span className="total-products-in-cart-number">{itemCount}</span>
        </button>
      </div>

      {isOpen && <Cart>
        <header id="header-cart">
          <button onClick={() => setIsOpen(false)} className="close">
            <FiX />
          </button>
          <h1>Carrinho</h1>

          <div></div>
        </header>

        {cartItems.length > 0 ? (
          <div className="cart-list-wrapper">
            <div className="cart-items">
              {cartItems.map(product => (

                <div className="cart-item">
                  <div className="product-info">
                    <img src={`${apiConfig.baseURL}${product.photos[0].url}`} alt="" />

                    <div>
                      <h3 className="title">{product.name}</h3>
                      <strong className="price">{formatMoney(product.price)}</strong>
                    </div>
                  </div>
                  <div className="product-actions">
                    <div className="controls">
                      {product.quantity === 1 ? (
                        <button onClick={() => removeProduct(product)}>-</button>
                      ) : (
                          <button onClick={() => decrease(product)}>-</button>
                        )}

                      <span>{product.quantity}</span>
                      <button onClick={() => increase(product)}>+</button>
                    </div>
                    <button onClick={() => removeProduct(product)} className="remove-product">
                      <img src="/icons/trash.svg" alt="" />
                    </button>
                  </div>
                </div>



              ))}

            </div>
            <div className="box">

              <div className="item">
                <div>Quantidade de items:</div>
                <strong>{itemCount}</strong>
              </div>

              <div className="item">
                <div>Preço total:</div>
                <strong>{formatMoney(total)}</strong>
              </div>

              <a onClick={checkout} className='mt btn-link' target="_blank" href={`https://api.whatsapp.com/send?phone=5562993395065&text=${checkoutMessage()}`}>Finalizar compra pelo Whatsapp</a>

            </div>
          </div>
        ) : (
            <div className="cart-list-wrapper">
              <div className="empty-cart">
                <img src="/icons/empty-cart.svg" alt="" />
                <h2>Seu carrinho está vazio :(</h2>

                <Link href="/" >
                  <a className='mt btn-link'>
                    <button onClick={() => setIsOpen(false)}>
                      Comece a comprar
    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}


      </Cart>}
    </Container>
  );
}

export default Header;