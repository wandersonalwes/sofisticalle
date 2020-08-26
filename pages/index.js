import React, { useEffect, useState } from 'react';
import { Input, ProductItem, ProductGrid, Banner, CategoryItem, Layout, Button } from '../components';
import Slider from 'react-slick';
import Link from 'next/link';

import api from '../services/api';
import apiConfig from '../config/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    api.get('/products', {
      params: {
        _sort: 'created_at:desc',
        _limit: 9
      }
    }).then(response => setProducts(response.data));
  }, []);

  useEffect(() => {
    api.get('/categories').then(response => setCategories(response.data));
  }, []);

  useEffect(() => {
    api.get('/products', {
      params: {
        is_featured: true,
        _limit: 6,
      }
    }).then(response => setFeatured(response.data));
  }, []);

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
    <Layout>

      <div className="mb mt">
        <Input placeholder="Fazer uma busca" />
      </div>

      <div className="wrapper-list-categories mb">
        <h2 className="title mb-md">Navegue por Categorias</h2>

        <div className="list-categories">
          {categories.map(category => (
            <div key={category.id}>
              <CategoryItem href={`/categorias/${category.id}`} thumbnail={category.thumbnail.url} name={category.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb">

        <Slider {...settings}>

          {featured && featured.map(featuredItem => (
            <div key={featuredItem.id}>
              <ProductItem id={featuredItem.id} name={featuredItem.name} price={featuredItem.price} photoURL={featuredItem.photos[0].url} />
            </div>
          ))}

        </Slider>
      </div>

      <div className="mb mt">
        <Banner
          title="12x"
          caption="Parcele suas compras em até 12x no cartão."
        />
      </div>

      <div className="mb">
        <h2 className="title mb-md">Produtos recentes</h2>

        <ProductGrid>
          {products.map(product => (
            <div key={product.id}>
              <ProductItem id={product.id} name={product.name} price={product.price} photoURL={product.photos[0].url} />
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
  );
}
