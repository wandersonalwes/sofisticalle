import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

const CategoryItem = ({ name, thumbnail, href }) => {
  return (
    <Container>
      <Link href={href}>
        <a>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail}`}
            alt={name}
          />
          <p>{name}</p>
        </a>
      </Link>
    </Container>
  )
}

export default CategoryItem
