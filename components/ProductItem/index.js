import React from 'react'
import Link from 'next/link'
import { formatMoney } from '../../utils'

import { Container } from './styles'

const ProductItem = ({ id, photoURL, name, price, slug }) => {
  return (
    <Container className="product-item">
      <Link href="/[slug]" as={`/${slug}`}>
        <a>
          <div className="wrapper-thumbnail">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${photoURL}`}
              alt={name}
            />

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
    </Container>
  )
}

export default ProductItem
