import React, { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />

      <button>
        <FiSearch />
      </button>
    </Container>
  );
}

export default Input;