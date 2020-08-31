import React, { useState } from 'react'
import Head from 'next/head'
import {
  Input,
  ProductItem,
  ProductGrid,
  Banner,
  CategoryItem,
  Layout,
  Loading
} from 'components'

import { useRouter } from 'next/router'
import Slider from 'react-slick'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

export default function Home({ products, categories, featuredProducts }) {
  const [searchLoading, setSearchLoading] = useState(true)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  }

  return (
    <>
      <Head>
        <title>Sofisticalle</title>
      </Head>
      <Layout>
        <div className="mb">
          <form className="mb mt">
            <Input
              onChange={e => setSearch(e.target.value)}
              name="search"
              placeholder="Fazer uma busca"
              button={
                searchLoading ? (
                  <button
                    onClick={() => {
                      setSearchLoading(false)
                      router
                        .push(`/produtos?search=${search}`)
                        .then(res => setSearchLoading(res))
                    }}
                  >
                    <FiSearch />
                  </button>
                ) : (
                    <button disabled>
                      <Loading />
                    </button>
                  )
              }
            />
          </form>

          <div className="wrapper-list-categories mb">
            <h2 className="title mb-md">Navegue por Categorias</h2>

            <div className="list-categories">
              {categories.map(category => (
                <div key={category.id}>
                  <CategoryItem
                    href={`/categorias/${category.id}`}
                    thumbnail={category.thumbnail.url}
                    name={category.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb">
            <Slider {...settings}>
              {featuredProducts &&
                featuredProducts.map(featuredItem => (
                  <div key={featuredItem.id}>
                    <ProductItem
                      id={featuredItem.id}
                      name={featuredItem.name}
                      price={featuredItem.price}
                      photoURL={featuredItem.photos[0].url}
                    />
                  </div>
                ))}
            </Slider>
            <div className="mb mt">
              <Banner
                title="12x"
                caption="Parcele suas compras em até 12x no cartão."
              />
            </div>
          </div>
          <ProductGrid>
            {products.map(product => (
              <div key={product.id}>
                <ProductItem
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  photoURL={product.photos[0].url}
                />
              </div>
            ))}
          </ProductGrid>
          <Link href="/produtos">
            <a className="mt btn-link">Ver todos os produtos</a>
          </Link>
        </div>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const { NEXT_PUBLIC_API_URL } = process.env

  const featuredProductsResponse = await fetch(
    `${NEXT_PUBLIC_API_URL}/products?is_featured=true`
  )

  const featuredProducts = await featuredProductsResponse.json()

  const productsResponse = await fetch(
    `${NEXT_PUBLIC_API_URL}/products?_limit=10&_sort=created_at:DESC`
  )

  const products = await productsResponse.json()

  const categoriesResponse = await fetch(`${NEXT_PUBLIC_API_URL}/categories`)

  const categories = await categoriesResponse.json()

  return {
    props: {
      products,
      categories,
      featuredProducts
    }
  }
}
