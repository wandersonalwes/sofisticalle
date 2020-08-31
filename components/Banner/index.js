import React from 'react'

import { Container } from './styles'

const Banner = ({ title, caption }) => {
  return (
    <Container>
      <div className="wrapper-heading">
        <h2 className="heading">{title}</h2>
      </div>
      <p className="caption">{caption}</p>
    </Container>
  )
}

export default Banner
