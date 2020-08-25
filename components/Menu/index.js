import React from 'react';
import { FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import { Container } from './styles';

function Menu({ menuIsOpen, handleClose, children }) {
  return (
    <>
      {menuIsOpen && (
        <Container>
          <div onClick={handleClose} className="overlay"></div>
          <div className="wrapper">
            <header className="header">

              <img src="/logo.svg" alt="" />
              <button className="close" onClick={handleClose}>
                <FiX />
              </button>
            </header>

            <div className="content-area">
              <nav className="menu">
                <ul>
                  <li>
                    <Link href="./">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./produtos">
                      <a onClick={handleClose}>
                        Todos os produtos
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav className="social-links">
                <ul>
                  <li>
                    <a onClick={handleClose} target="_blank" href="https://www.facebook.com/sofisticalle">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a onClick={handleClose} target="_blank" href="https://www.facebook.com/sofisticalle">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Menu;