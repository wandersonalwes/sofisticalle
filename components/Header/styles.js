import styled, { css } from 'styled-components'
import { FiGrid, FiHeart, FiShoppingBag } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-line-in-white);
  height: 7rem;

  button {
    border: 0;
    background: transparent;
  }

  .total-products-in-cart-wrapper {
    margin-left: 15px;
    position: relative;

    .total-products-in-cart-number {
      position: absolute;

      top: -0.5rem;
      right: -0.5rem;
      background: var(--color-primary);
      color: var(--color-text-title);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      font-size: 1.2rem;
      border-radius: 50%;
    }
  }
`

const iconCSS = css`
  font-size: 36px;
  color: var(--color-text-title);

  &:hover {
    opacity: 0.8;
  }
`

export const IconMenu = styled(FiGrid)`
  ${iconCSS}
`
export const IconFavorites = styled(FiHeart)`
  ${iconCSS}
`
export const IconCart = styled(FiShoppingBag)`
  ${iconCSS}
`

export const Cart = styled.div`
  animation-name: op;
  animation-duration: 1s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 1;
  max-width: 40rem;
  width: 100%;
  border-left: 1px solid var(--color-line-in-white);
  overflow: auto;

  #header-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid var(--color-line-in-white);
    height: 7rem;

    .close {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 2.4rem;
      }
    }
  }

  .cart-list-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 7rem);
    padding: 5rem 2rem;
    overflow: auto;

    .empty-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        margin-bottom: 2rem;
      }
    }

    .cart-item {
      margin-bottom: 1.4rem;
      border: 1px solid var(--color-line-in-white);
      border-radius: var(--border-radius-md);

      .product-info {
        padding: 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--color-line-in-white);
        img {
          width: 5rem;
          height: 5rem;
          object-fit: fill;
          border-radius: 50%;
          margin-right: 1.5rem;
        }

        .title {
          color: var(--color-text-input);
          font-size: 1.4rem;
          font-family: 'Archivo', sans-serif;
          font-weight: 400;
          max-width: 15rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          font-size: 1.8rem;
          font-family: 'Poppins', sans-serif;
        }
      }

      .product-actions {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .controls {
          button {
            width: 2.4rem;
            height: 2.4rem;
            border: 1px solid var(--color-line-in-white);
            border-radius: 50%;
          }

          span {
            margin: 0 1rem;
            font-size: 1.4rem;
            font-family: 'Poppins', sans-serif;
          }
        }

        .remove-product {
          svg {
            font-size: 2.4rem;
            background: var(--color-gradient);
          }
        }
      }
    }
    .box {
      border-radius: var(--border-radius-md);
      padding: 2rem;

      .item {
        font-size: 1.4rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + .item {
          padding-top: 1rem;
          border-top: 1px solid var(--color-line-in-white);
          margin-top: 1rem;
        }
      }
    }
  }
`
