import React from 'react';
import { Header } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mt">
        {children}
      </div>
    </>
  );
}

export default Layout;