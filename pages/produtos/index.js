import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Layout, ProductGrid, ProductItem, Button } from '../../components';

import { Navegation } from '../../styles/pages/product-single'

function Products({ products, numberOfProducts, page }) {

  const [nextLoading, setNextLoading] = useState(true)
  const [previousLoading, setPreviousLoading] = useState(true)

  const router = useRouter()

  const lastPage = Math.ceil(numberOfProducts / 20)

  function ButtonLoader() {
    return (
      <Button disabled>
        <div class="loader"></div>
      </Button>
    )
  }

  return (
    <>
      <Head>
        <title>Sofisticalle - Produtos</title>
      </Head>
      <Layout>
        <ProductGrid>
          {products && products.map(product => (
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

        <Navegation>
          {previousLoading ? (
            <button
              disabled={page <= 1}
              onClick={() => {
                setPreviousLoading(false)
                router.push(`/produtos?page=${page - 1}`).then(res => setPreviousLoading(res))
              }}
            >
              Página anterior
            </button>
          ) : (<ButtonLoader />)}


          {nextLoading ? (
            <button
              disabled={page >= lastPage}
              onClick={() => {
                setNextLoading(false)
                router.push(`/produtos?page=${page + 1}`).then(res => setNextLoading(res))
              }}
            >
              Próxima página
            </button>
          ) : (<ButtonLoader />)}
        </Navegation>
      </Layout>
    </>
  );
}


export async function getServerSideProps({ query: { page = 1 } }) {

  const { NEXT_PUBLIC_API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 20

  const numberOfProductsResponse = await fetch(`${NEXT_PUBLIC_API_URL}/products/count`)

  const numberOfProducts = await numberOfProductsResponse.json()

  const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?_limit=20&_start=${start}`)

  const products = await productsResponse.json()


  return {
    props: {
      products,
      numberOfProducts,
      page: +page,
    },
  }
}

export default Products;