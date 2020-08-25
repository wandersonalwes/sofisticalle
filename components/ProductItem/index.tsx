import React from 'react';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';
import { formatMoney } from '../../utils';

import apiConfig from '../../config/api';

import { Container } from './styles';

interface ProductItemProps {
  id: number;
  photoURL: string;
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, photoURL, name, price }) => {
  return (
    <Container className="product-item">
      <Link href="/produtos/[id]" as={`/produtos/${id}`}>
        <a>
          <div className="wrapper-thumbnail">
            <img src={`${apiConfig.baseURL}${photoURL}`} alt={name} />

            {/* <button className="favorite">
              <FiHeart />
            </button> */}
          </div>
          <div className="wrapper-product-info">
            <h3 className="product-name">{name}</h3>

            <strong className="price">{formatMoney(price)}</strong>
          </div>
        </a>
      </Link>
    </Container>);
}

export default ProductItem;