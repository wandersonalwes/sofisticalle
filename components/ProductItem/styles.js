import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  border: 1px solid var(--color-line-in-white);
  transition: opacity 200ms;

  &:hover {
    opacity: 0.8;
  }

  a {
    text-decoration: none;

    img {
      border-radius: 1rem 1rem 0 0;
      width: 100%;
      height: min(350px, 33.3333vw);
      object-fit: contain;
      transition: 200ms;
    }

    .wrapper-thumbnail {
      position: relative;

      .favorite {
        position: absolute;
        bottom: -1rem;
        right: 1.5rem;

        width: 3.4rem;
        height: 3.4rem;
        background: white;
        border: 0;
        box-shadow: var(--shadow-md);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 2.4rem;
          color: var(--color-danger);

          &:hover {
            filter: brightness(90%);
          }
        }
      }
    }

    .wrapper-product-info {
      padding: 1.4rem;
      border-top: 1px solid var(--color-line-in-white);
    }

    .product-name {
      font-size: 1.4rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 400;
      color: var(--color-text-title);
      margin-bottom: 0.5rem;
    }
    .price {
      font-size: 1.8rem;
      color: var(--color-primary);
    }
  }

  img {
    max-width: 100%;
  }
`
