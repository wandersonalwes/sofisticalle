import React from 'react';
import { Header } from '../index';

const Layout: React.FC = ({ children }) => {
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