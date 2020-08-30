import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

import { Layout, ProductGrid, ProductItem, Input } from '../../components';

import { Navegation } from '../../styles/pages/product-single'

function Search({ products, numberOfProducts, page }) {

  const [nextLoading, setNextLoading] = useState(true)
  const [previousLoading, setPreviousLoading] = useState(true)
  const [searchLoading, setSearchLoading] = useState(true)
  const [search, setSearch] = useState('')

  const router = useRouter()

  const lastPage = Math.ceil(numberOfProducts / 20)

  function ButtonLoader() {
    return (
      <button disabled>
        <div class="loader"></div>
      </button>
    )
  }

  return (
    <>
      <Head>
        <title>Sofisticalle - Produtos</title>
      </Head>
      <Layout>

        <form className="mb">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Buscar um móvel..."
            button={
              searchLoading ? (
                <button
                  onClick={() => {
                    setSearchLoading(false)
                    router.push(`/produtos?search=${search}`).then(res => setSearchLoading(res))
                  }}>
                  <FiSearch />
                </button>
              ) : <ButtonLoader />
            }
          />
        </form>

        {products.length > 0 ? (
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
        ) : <h2>Nenhum produto encontrado!</h2>}

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


export async function getServerSideProps({ query: { page = 1, search = '' } }) {

  const { NEXT_PUBLIC_API_URL } = process.env

  const start = +page === 1 ? 0 : (+page - 1) * 20

  const numberOfProductsResponse = await fetch(`${NEXT_PUBLIC_API_URL}/products/count?name_contains=${search}`)

  const numberOfProducts = await numberOfProductsResponse.json()

  const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?_limit=20&_start=${start}&name_contains=${search}`)

  const products = await productsResponse.json()


  return {
    props: {
      products,
      numberOfProducts,
      page: +page,
    },
  }
}

export default Search;