import React, { useEffect, useState } from 'react';
import { Layout, Button } from '../../components';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import ReactMarkdown from 'react-markdown';
import { useCart } from '../../contexts/CartContext';
import api from '../../services/api';
import apiConfig from '../../config/api';
import { formatMoney } from '../../utils';

import { WrapperProductSingle } from '../../styles/pages/product-single';

const ProductSingle = ({ }) => {

  const { addProduct, cartItems, increase } = useCart();

  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id !== undefined) {
      api.get(`/products/${id}`).then(response => setProduct(response.data));
    }
  }, [id]);

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  }

  return (
    <Layout>
      <WrapperProductSingle>
        <Slider
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
        >
          {product.photos && product.photos.map(photo => (

            <img className="photo-item" key={photo.id} src={`${apiConfig.baseURL}${photo.url}`} alt={photo.name} />

          ))}
        </Slider>

        <div className="details">
          <h1 className="title">{product.name}</h1>

          <strong className="price">{formatMoney(product.price)}</strong>
        </div>

        <ReactMarkdown
          source={product.description}
          escapeHtml={false}
        />

        {!isInCart(product) && <Button className="mt" onClick={() => addProduct(product)}>Adicionar ao Carrinho</Button>}

        {!!isInCart(product) && <Button className="mt" onClick={() => increase(product)}>Adicionar mais</Button>}

      </WrapperProductSingle>
    </Layout>
  );
}

export default ProductSingle;