import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-line-in-white: #F2F2F2;
    --color-text-title: #000000;
    --color-primary: #FFA700;
    --color-text-input-placeholder: #C4C4C4;
    --color-text-input: #4F4F4F;
    --shadow: 0px 4px 20px rgba(209, 195, 195, 0.25);
    --shadow-md: 0px 4px 4px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0px 4px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;
    --color-text-in-primary: #fff;
    --border-radius-md: 1rem;
    --border-radius-sm: 0.5rem;
    --color-danger: #FE3466;
    --color-gradient-primary: linear-gradient(89.79deg, #EE0979 0.15%, #FF6A00 99.79%);
    --color-text-base: #505050;

  }

  p {
    font-size: 1.4rem;
    color: var(--color-text-base);
  }

  *, html, body, input, textarea, button {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .container {
    padding: 0 20px;
    max-width: 997px;
    margin: 0 auto;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  .mt {
    margin-top: 4rem;
  }
  .mb {
    margin-bottom: 4rem;
  }
  .mb-md {
    margin-bottom: 2rem;
  }

  .title {
    font-family: 'Archivo', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.0rem;
  }
  .wrapper-list-categories {

    .list-categories {
      display: flex;
      overflow: auto;
    }
  }

  .btn-link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background: var(--color-primary);
    border: 0;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: var(--border-radius-md);
    width: 100%;
    text-decoration: none;

    &:hover {
      filter: brightness(95%);
    }

    svg {
      margin-right: 1rem;
    }
  }
`;