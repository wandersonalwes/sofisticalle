import React, { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../../contexts/CartContext'
import { FiX } from 'react-icons/fi'
import { formatMoney } from '../../utils'
import { Menu } from '../index'

import { Button } from '../Button'

import { Container, IconMenu, IconCart, Cart } from './styles'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const {
    itemCount,
    cartItems,
    increase,
    decrease,
    removeProduct,
    total,
    checkout,
    whatsapp,
    isOpen,
    setIsOpen
  } = useCart()

  function handleClose() {
    return setMenuIsOpen(false)
  }

  const checkoutMessage = () => {
    const productList = cartItems.map(item => {
      return `${item.quantity} ${item.name}: Valor ${formatMoney(
        item.price
      )}%0D%0D%0A%0D%0D%0A`
    })

    return `Olá! *Aqui está a lista de produtos que desejo comprar:*%0D%0D%0A%0D%0D%0A${productList}*O valor total é:* ${formatMoney(
      total
    )}%0D%0D%0A%0D%0D%0AObrigado(a)!
    `
  }

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} handleClose={handleClose} />
      <button onClick={() => setMenuIsOpen(true)}>
        <IconMenu />
      </button>

      <Link href="/">
        <a>
          <img className="logo" src="/logo.svg" alt="Sofisticalle" />
        </a>
      </Link>

      <div>
        {/* <Link href={{ pathname: '/' }}>
          <a>
            <IconFavorites />
          </a>
        </Link> */}
        <button
          onClick={() => setIsOpen(true)}
          className="total-products-in-cart-wrapper"
        >
          <IconCart />
          <span className="total-products-in-cart-number">{itemCount}</span>
        </button>
      </div>

      {isOpen && (
        <Cart>
          <header id="header-cart">
            <button onClick={() => setIsOpen(false)} className="close">
              <FiX />
            </button>
            <h1>Carrinho</h1>

            <div></div>
          </header>

          {cartItems.length > 0 && (
            <div className="cart-list-wrapper">
              <div className="cart-items">
                {cartItems.map(product => (
                  <div key={product.id} className="cart-item">
                    <div className="product-info">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${product.photos[0].url}`}
                        alt=""
                      />

                      <div>
                        <h3 className="title">{product.name}</h3>
                        <strong className="price">
                          {formatMoney(product.price)}
                        </strong>
                      </div>
                    </div>
                    <div className="product-actions">
                      <div className="controls">
                        {product.quantity === 1 ? (
                          <button onClick={() => removeProduct(product)}>
                            -
                          </button>
                        ) : (
                            <button onClick={() => decrease(product)}>-</button>
                          )}

                        <span>{product.quantity}</span>
                        <button onClick={() => increase(product)}>+</button>
                      </div>
                      <button
                        onClick={() => removeProduct(product)}
                        className="remove-product"
                      >
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

                <Button
                  variant="primary"
                  onClick={() => {
                    checkout()

                    window.location.href = `https://api.whatsapp.com/send?phone=${
                      whatsapp !== '' ? whatsapp : '5562993395065'
                      }&text=${checkoutMessage()}`
                  }}
                >
                  Finalizar compra pelo Whatsapp
                </Button>
              </div>
            </div>
          )}

          {cartItems.length <= 0 && (
            <div className="cart-list-wrapper">
              <div className="empty-cart">
                <img src="/icons/empty-cart.svg" alt="" />
                <h2>Seu carrinho está vazio :(</h2>
                <Button
                  onClick={() => (window.location.href = '/')}
                  variant="primary"
                >
                  Comece a comprar
                </Button>
              </div>
            </div>
          )}
        </Cart>
      )}
    </Container>
  )
}

export default Header
