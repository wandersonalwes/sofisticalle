import React from 'react';

import { Container } from './styles';

const ProductGrid = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default ProductGrid;