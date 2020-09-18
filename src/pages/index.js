import { useState } from 'react'
import {
  Input,
  ProductItem,
  ProductGrid,
  Banner,
  CategoryItem,
  Layout,
  Loading,
  Head
} from '@/components/index'

import { useRouter } from 'next/router'
import Slider from 'react-slick'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import api from '../services/api'

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
      <Head
        title="Sofisticalle - Móveis e eletrodomésticos"
        description="Sofisticalle - Loja de Móveis e eletrodomésticos em Goiânia-GO"
        keywords="moveis, goiânia, entrega grátis, montagem grátis"
        image="/thumbnail.png"
      />
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
                        .push(`/moveis?search=${search}`)
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
                <div key={category.slug}>
                  <CategoryItem
                    href={`/moveis/${category.slug}`}
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
                      slug={featuredItem.slug}
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
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  photoURL={product.photos[0].url}
                />
              </div>
            ))}
          </ProductGrid>
          <Link href="/moveis">
            <a className="mt btn-link">Ver todos os produtos</a>
          </Link>
        </div>
      </Layout>
    </>
  )
}
export async function getStaticProps() {
  const { data: featuredProducts } = await api.get('/products?is_featured=true')
  const { data: products } = await api.get(
    '/products?_limit=10&_sort=created_at:DESC'
  )
  const { data: categories } = await api.get('/categories')
  return {
    props: {
      products,
      categories,
      featuredProducts
    }
  }
}
