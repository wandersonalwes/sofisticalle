import { getCategoryBySlug } from 'src/lib/api'
import { Layout, ProductGrid, ProductItem } from '@/components/index'

const Category = ({ category, products }) => {
  return (
    <Layout>
      <div className="mb">
        <h1 className="mb">{category.name}</h1>
        {category.products.length > 0 && (
          <ProductGrid>
            {products.map(product => {
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
        )}

        {products.length <= 0 && <h2>Nenhum produto encontrado</h2>}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  return getCategoryBySlug(params.slug)
}

export default Category
