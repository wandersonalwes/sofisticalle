import React, { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const Input = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />

      <button type="submit">
        <FiSearch />
      </button>
    </Container>
  );
}

export default Input;