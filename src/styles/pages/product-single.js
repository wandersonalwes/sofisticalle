import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 99.2rem;
  padding-bottom: 4rem;

  .column-right {
  }

  .photo-item {
    max-height: 40rem;
    object-fit: contain;
  }

  .details {
    .title {
      font-size: 1.8rem;
      color: var(--color-title);
    }

    .price {
      font-size: 2.8rem;
      color: var(--color-title);
    }
  }
`

export const Breadcrumb = styled.ol`
  display: flex;
  margin-bottom: 1.4rem;
`
export const BreadcrumbItem = styled.li`
  list-style: none;
  display: flex;
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: var(--color-title);
  }

  & + li:before {
    content: '';
    width: 1px;
    height: 80%;
    background: gray;
    display: block;
    transform: rotate(20deg);
    margin: 0 1rem;
  }
`
export const BreadcrumbLink = styled.a`
  font-size: 1.4rem;
`

export const MainWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;

    .carousel-root {
      width: 60%;
    }
  }
`

export const CheckoutWrap = styled.div`
  @media (min-width: 768px) {
    margin-left: 2rem;
    flex: 1;
  }
`
export const Checkout = styled.div`
  @media (min-width: 768px) {
    border: 1px solid #ccc;
    border-radius: var(--border-radius-sm);
    padding: 2rem;
  }

  a {
    /* margin-top: 3rem; */
  }

  button {
    margin-top: 1rem;
  }
`
export const ProductName = styled.h2`
  font-size: 1.8rem;
  color: var(--color-title);
  margin-bottom: 1rem;
`
export const ProductPrice = styled.strong`
  font-size: 2.8rem;
  color: var(--color-title);
`

export const Warning = styled.div`
  margin: 2rem 0;

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`

export const Share = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  strong {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  a {
    margin-right: 0.5rem;

    svg {
      color: #aaa;
      font-size: 1.8rem;
      transition: 200ms;

      &:hover {
        filter: brightness(70%);
      }
    }
  }
`

export const ProductInformation = styled.div`
  margin-top: 4rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`
export const Navegation = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  padding-top: 3rem;
  border-top: 1px solid var(--color-line-in-white);
  button {
    font-size: 1.4rem;
    color: #fff;
    background: var(--color-primary);
    height: 5rem;
    padding: 0 2rem;
    border-radius: var(--border-radius-md);
    border: 0;
    &:hover {
      opacity: 0.9;
    }
    &:first-child {
      margin-right: 1rem;
    }

    &:disabled {
      background: #ccc;
      color: #aaa;
    }
  }
`
