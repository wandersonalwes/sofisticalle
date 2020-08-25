import React from 'react';
import Link from 'next/link';
import apiConfig from '../../config/api';

import { Container } from './styles';

const CategoryItem = ({ name, thumbnail, href }) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <img src={`${apiConfig.baseURL}${thumbnail}`} alt="roupeiro" />
          <p>{name}</p>
        </a>
      </Link>
    </Container>
  );
}

export default CategoryItem;