import React, { useEffect, useState } from 'react';
import { Layout, ProductGrid, ProductItem } from '../../components';
import { useRouter } from 'next/router';
import api from '../../services/api';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    api.get('/categories', {
      params: {
        id
      }
    }).then(response => setCategories(response.data));
  }, [id]);

  return (
    <Layout>
      {categories && categories.map(category => {
        return (
          <div className="container mb">
            <h1 className="mb">{category.name}</h1>
            {category.products.length > 0 ? (
              <ProductGrid>
                {category.products.map(product => {
                  return (
                    <div key={product.id}>
                      <ProductItem
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        photoURL={product.photos[0].url}
                      />
                    </div>
                  )
                })}
              </ProductGrid>
            ) : <h2>Nenhum produto encontrado!</h2>}
          </div>
        )
      })}
    </Layout>
  );
}

export default Categories;