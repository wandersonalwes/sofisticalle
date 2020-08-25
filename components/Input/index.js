import React, { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Input = ({ ...rest }) => {
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