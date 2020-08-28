import React, { useEffect, useState } from 'react';
import { Layout, ProductGrid, ProductItem } from '../../components';
import { useRouter } from 'next/router';
import api from '../../services/api';

const Category = () => {
  const [category, setCategory] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id } = router.query;

  useEffect(() => {

    if (id !== undefined) {
      api.get(`/categories/${id}`).then(response => {
        setCategory(response.data);
        setLoading(true);
      });
    }
  }, [id]);

  return (
    <Layout>

      {loading === true ? (
        <div className="mb">
          <h1 className="mb">{category.name}</h1>
          {category.products && category.products.length > 0 ? (
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

      ) : (
          <h2>Carregando...</h2>
        )}

    </Layout>
  );
}

export default Category;