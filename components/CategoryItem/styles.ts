import styled from 'styled-components';

export const Container = styled.div`
display: inline-block;
margin-right: 1rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;

    &:hover > .wrapper-thumbnail {
      background: #f5f5f5;
    }


    img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      object-fit: cover;
    }
    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      max-width: 8rem;

      display: flex;
      align-items: center;
      text-align: center;
      text-transform: lowercase;
      color: #240F00;
    }
  }
`;
