import React from 'react'
import { Layout, Button } from 'components'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import ReactMarkdown from 'react-markdown'
import { useCart } from '../../contexts/CartContext'
import { formatMoney } from '../../utils'

import { WrapperProductSingle } from '../../styles/pages/product-single'

const ProductSingle = ({ product }) => {
  const router = useRouter()

  const { addProduct, cartItems, increase } = useCart()

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id)
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <WrapperProductSingle>
        <Slider dots={true} slidesToShow={1} slidesToScroll={1} infinite={true}>
          {product.photos &&
            product.photos.map(photo => (
              <img
                className="photo-item"
                key={photo.id}
                src={`${process.env.NEXT_PUBLIC_API_URL}${photo.url}`}
                alt={photo.name}
              />
            ))}
        </Slider>

        <div className="details">
          <h1 className="title">{product.name}</h1>

          <strong className="price">{formatMoney(product.price)}</strong>
        </div>

        <ReactMarkdown source={product.description} escapeHtml={false} />

        {!isInCart(product) && (
          <Button className="mt" onClick={() => addProduct(product)}>
            Adicionar ao Carrinho
          </Button>
        )}

        {!!isInCart(product) && (
          <Button className="mt" onClick={() => increase(product)}>
            Adicionar mais
          </Button>
        )}
      </WrapperProductSingle>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const products = await res.json()

  const paths = products.map(product => ({
    params: { id: product.id.toString() }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { NEXT_PUBLIC_API_URL } = process.env

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/products/${params.id}`)
  const product = await res.json()

  return { props: { product } }
}

export default ProductSingle
