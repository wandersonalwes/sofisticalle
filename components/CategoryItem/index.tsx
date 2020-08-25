import React from 'react';
import Link from 'next/link';
import apiConfig from '../../config/api';

import { Container } from './styles';

interface CategoryItemProps {
  name: string;
  thumbnail: string;
  href?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, thumbnail, href }) => {
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