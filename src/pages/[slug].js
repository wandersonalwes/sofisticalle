import React from 'react'
import { Layout, Button, Head, ProductItem } from '@/components/index'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { useCart } from '../contexts/CartContext'
import { formatMoney } from '../utils'
import { FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa'
import api from '../services/api'

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
  ProductInformation,
  RelatedProduct,
  Comments
} from '../styles/pages/product-single'
import Link from 'next/link'

const ProductSingle = ({ product, relatedProducts }) => {
  console.log(relatedProducts)
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const router = useRouter()

  const { addProduct, cartItems, setIsOpen, whatsapp } = useCart()

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
            <BreadcrumbItem>
              <Link href={`/moveis/${product.categories[0].slug}`}>
                <a>{product.categories[0].name}</a>
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
                  <Link href={`${product.slug}#info`}>
                    <a>Ver informações do produto</a>
                  </Link>
                </Warning>
                <Button
                  onClick={() =>
                    (window.location.href = `https://api.whatsapp.com/send?phone=${whatsapp}&text=Olá,%20%20Tenho%20interesse%20neste%20item:%20https://sofisticalle.com/${product.slug}`)
                  }
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
          <RelatedProduct id="info">
            <h2>Produtos relacionados</h2>
            <Slider {...settings}>
              {relatedProducts &&
                relatedProducts.map(relatedProduct => (
                  <div key={relatedProduct.id}>
                    <ProductItem
                      slug={relatedProduct.slug}
                      name={relatedProduct.name}
                      price={relatedProduct.price}
                      photoURL={relatedProduct.photos[0].url}
                    />
                  </div>
                ))}
            </Slider>
          </RelatedProduct>
          <ProductInformation>
            <h2>Informações do produto</h2>
            <ReactMarkdown source={product.description} escapeHtml={false} />
          </ProductInformation>

          <Comments>
            <h2>Comentários</h2>
            <div
              className="fb-comments"
              data-href={`https://sofisticalle.com/${product.slug}`}
              data-numposts="5"
              data-width="100%"
            ></div>
          </Comments>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const { data: products } = await api.get('/products')

  const paths = products.map(product => ({
    params: { slug: product.slug }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { data: relatedProducts } = await api.get('/products?_limit=15')
  const {
    data: [product]
  } = await api.get(`/products?slug=${params.slug}`)
  return { props: { product, relatedProducts } }
}

export default ProductSingle
