import styled from 'styled-components'

export const WrapperProductSingle = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding-bottom: 4rem;

  .photo-item {
    max-height: 40rem;
    object-fit: contain;
  }

  .details {
    display: flex;
    margin-top: 5rem;
    margin-bottom: 3rem;

    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 1.8rem;
      color: var(--color-title);
    }

    .price {
      font-size: 2.4rem;
      background: var(--color-gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      margin-left: 1.4rem;
    }
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
  }
`
