import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <Container>
      <button {...rest}>
        {children}
      </button>
    </Container>
  );
}

export default Button;