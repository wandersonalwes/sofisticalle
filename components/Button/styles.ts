import styled from 'styled-components';

export const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background: 
    ${props => props.gradient ? 'linear-gradient(89.79deg, #EE0979 0.15%, #FF6A00 99.79%)' : '#FFA700'};
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
`;
