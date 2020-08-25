import styled from "styled-components";

export const WrapperProductSingle = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding-bottom: 4rem;

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
      font-size: 1.8rem;
      background: var(--color-gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
