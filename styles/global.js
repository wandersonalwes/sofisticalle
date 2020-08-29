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

  button:disabled {
    cursor: default;

    &:hover {
      opacity: 1;
    }
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
  @keyframes op {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  .error-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    h1 {
      margin-bottom: 2rem;
    }

    a {
      font-size: 1.4rem;
      color: var(--color-primary);
      text-decoration: none;

      &:hover {
        filter: brightness(90%);
      }
    }
  }


.loader,
.loader:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.loader {
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;