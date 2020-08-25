import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import apiConfig from '../../config/api';
// import { useRouter } from 'next/router';

import { Layout, ProductGrid, ProductItem, Input, Button } from '../../components';

function Products() {

  const [products, setProducts] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    api.get('/products').then(response => setProducts(response.data));
  }, []);

  async function handleFilter(e) {
    e.preventDefault();

    const response = await api.get('/products', {
      params: {
        name_contains: search,
      }
    });

    setProducts(response.data);
  }
  return (
    <Layout>

      <form className="mb" onSubmit={handleFilter}>
        <Input
          placeholder="Buscar um produto..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
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
    </Layout>
  );
}

export default Products;