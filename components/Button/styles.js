import styled from 'styled-components'

export const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background: var(--color-primary);
    border: 0;
    height: 5rem;
    padding: 0 2rem;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: var(--border-radius-md);
    width: 100%;

    &:hover {
      filter: brightness(95%);
    }

    svg {
      margin-right: 1rem;
    }
  }
`
