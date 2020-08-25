import styled from 'styled-components';

export const Container = styled.article`
  padding: 5rem;
  background: var(--color-gradient-primary);
  border-radius: var(--border-radius-md);
  margin: 0 auto;
  height: 25rem;
  width: 100%;
  /* max-width: 500px; */

  .wrapper-heading {
    display: flex;

    .heading {
      background: var(--color-text-in-primary);
      border-radius: var(--border-radius-sm);
      padding: 0.5rem 2rem;
      font-size: 3rem;
      color: var(--color-primary);
      margin-bottom: 2rem;
    }
  }
  .caption{
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }
`;
