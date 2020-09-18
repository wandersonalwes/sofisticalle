import React from 'react'
import { Layout, Button, Head } from 'components'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { useCart } from '../contexts/CartContext'
import { formatMoney } from '../utils'
import { FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa'

import { Carousel } from 'react-responsive-carousel'

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  MainWrap,
  CheckoutWrap,
  Checkout,
  ProductName,
  ProductPrice,
  Warning,
  Share,
  ProductInformation
} from '../styles/pages/product-single'
import Link from 'next/link'

const ProductSingle = ({ product }) => {
  const router = useRouter()

  const { addProduct, cartItems, setIsOpen } = useCart()

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id)
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head
        title={`${product.name} - Sofisticalle`}
        description={`${product.name} | Entrega e montagem grátis para Goiânia e região.`}
        keywords={`${product.name}, entrega grátis, montagem grátis, Goiânia`}
        image={process.env.NEXT_PUBLIC_API_URL + product.photos[0].url}
      />
      <Layout>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="./">
                <a>Home</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{product.name}</BreadcrumbItem>
          </Breadcrumb>
          <MainWrap>
            <Carousel
              showArrows={true}
              dynamicHeight={false}
              thumbWidth={80}
              infiniteLoop={true}
              showIndicators={false}
              emulateTouch={true}
              showStatus={false}
            >
              {product.photos.map(photo => (
                <div key={photo.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${photo.url}`}
                    alt={photo.name}
                  />
                </div>
              ))}
            </Carousel>

            <CheckoutWrap>
              <Checkout>
                <ProductName className="title">{product.name}</ProductName>

                <ProductPrice className="price bg-gray">
                  {formatMoney(product.price)}
                </ProductPrice>

                <Warning>
                  <p>
                    <FiCheckCircle /> Entrega grátis
                  </p>
                  <p>
                    <FiCheckCircle /> Montagem grátis
                  </p>
                  <p>
                    <FiCheckCircle />
                    Pagamento após a montagem
                  </p>
                </Warning>
                <Button
                  onClick={() =>
                    (window.location.href = 'https://wa.me/5562993395065')
                  }
                  className=""
                  variant="success"
                >
                  Comprar Agora
                </Button>
                {!isInCart(product) && (
                  <Button
                    variant="success"
                    outlined
                    onClick={() => {
                      addProduct(product)
                      setIsOpen(true)
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                )}

                {!!isInCart(product) && (
                  <Button disabled={true}>Produto no carrinho</Button>
                )}
              </Checkout>
              <Share>
                <strong>Compartilhar:</strong>

                <a
                  href={`whatsapp://send?text=https://sofisticalle.com/${product.slug}`}
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://sofisticalle.com/${product.slug}`}
                >
                  <FaFacebook />
                </a>

                <a
                  href={`https://twitter.com/home?status=https://sofisticalle.com/${product.slug}`}
                >
                  <FaTwitter />
                </a>
              </Share>
            </CheckoutWrap>
          </MainWrap>

          <ProductInformation>
            <h2>Informações do produto</h2>
            <ReactMarkdown source={product.description} escapeHtml={false} />
          </ProductInformation>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const products = await res.json()

  const paths = products.map(product => ({
    params: { slug: product.slug }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { NEXT_PUBLIC_API_URL } = process.env

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/products?slug=${params.slug}`)
  const product = await res.json()

  return { props: { product: product[0] } }
}

export default ProductSingle
