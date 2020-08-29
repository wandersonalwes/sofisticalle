import Head from 'next/head'
import { Input, ProductItem, ProductGrid, Banner, CategoryItem, Layout } from '../components';
import Slider from 'react-slick';
import Link from 'next/link';

export default function Home({ products, categories, featuredProducts }) {

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  };

  return (
    <>
      <Head>
        <title>Sofisticalle</title>
      </Head>
      <Layout>
        <div className="mb">
          <div className="mb mt">
            <Input placeholder="Fazer uma busca" />
          </div>
          <div className="wrapper-list-categories mb">
            <h2 className="title mb-md">Navegue por Categorias</h2>

            <div className="list-categories">
              {categories.map(category => (
                <div key={category.id}>
                  <CategoryItem
                    href={`/categorias/${category.id}`}
                    thumbnail={category.thumbnail.url}
                    name={category.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb">

            <Slider {...settings}>

              {featuredProducts && featuredProducts.map(featuredItem => (
                <div key={featuredItem.id}>
                  <ProductItem id={featuredItem.id} name={featuredItem.name} price={featuredItem.price} photoURL={featuredItem.photos[0].url} />
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
            <a className='mt btn-link'>
              Ver todos os produtos
              </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  const { NEXT_PUBLIC_API_URL } = process.env

  const featuredProductsResponse = await fetch(`${NEXT_PUBLIC_API_URL}/products?is_featured=true`)

  const featuredProducts = await featuredProductsResponse.json()

  const productsResponse = await fetch(`${NEXT_PUBLIC_API_URL}/products?_limit=10&_sort=created_at:DESC`)

  const products = await productsResponse.json()

  const categoriesResponse = await fetch(`${NEXT_PUBLIC_API_URL}/categories`)

  const categories = await categoriesResponse.json()

  return {
    props: {
      products,
      categories,
      featuredProducts
    },
  }
}