import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border: 1px solid var(--color-line-in-white);
  height: 5rem;
  border-radius: var(--border-radius-md);

  input {
    border: 0;
    height: 100%;
    width: 100%;
    padding: 0 5rem 0 2rem;
    box-shadow: var(--shadow);
    color: var(--color-text-input);
    outline: none;
    background: transparent;

    &::placeholder {
      color: var(--color-text-input-placeholder);
    }
  }

  button {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;

    top: 1.3rem;
    right: 2rem;

    background: transparent;
    border: 0;

    svg {
      font-size: 2.4rem;
      color: var(--color-text-input-placeholder);

      &:hover {
        color: var(--color-text-input);
      }
    }
  }
`
