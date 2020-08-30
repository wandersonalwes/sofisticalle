import React from 'react';
import { Header } from '../index';

import { Footer } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mt">
        {children}
      </div>

      <Footer>
        <p>
          Desenvolvimento:
            <strong>
            <a href="https://wandersonalwes.com.br/" target="_blank" rel="noopener noreferrer"> Wanderson Alwes</a>
          </strong>
        </p>

        <p>
          UX/UI:  <strong>
            <a href="https://wandersonalwes.com.br/" target="_blank" rel="noopener noreferrer">Wanderson Alwes</a>
          </strong>  |  <strong><a href="https://github.com/lucaslopes-dev" target="_blank" rel="noopener noreferrer">Lucas Lopes</a></strong>
        </p>

      </Footer>
    </>
  );
}

export default Layout;