import React from 'react'
import { Layout, ProductGrid, ProductItem } from 'components'

const Category = ({ category }) => {
  console.log(category)
  return (
    <Layout>
      <div className="mb">
        <h1 className="mb">{category.name}</h1>
        {category.products.length > 0 ? (
          <ProductGrid>
            {category.products.map(product => {
              return (
                <div key={product.id}>
                  <ProductItem
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                    photoURL={product.photos[0].url}
                  />
                </div>
              )
            })}
          </ProductGrid>
        ) : (
            <h2>Nenhum produto encontrado</h2>
          )}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  const categories = await res.json()

  const paths = categories.map(product => ({
    params: { slug: product.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { NEXT_PUBLIC_API_URL } = process.env

  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/categories?slug=${params.slug}`
  )
  const [category] = await res.json()

  return { props: { category } }
}

export default Category
