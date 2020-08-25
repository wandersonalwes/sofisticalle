import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: boolean;
}

const Button: React.FC<ButtonProps> = ({ gradient, children, ...rest }) => {
  return (
    <Container gradient={gradient}>
      <button {...rest}>
        {children}
      </button>
    </Container>
  );
}

export default Button;