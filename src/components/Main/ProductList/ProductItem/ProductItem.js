import React, { useState } from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

export const ProductItem = ({ item }) => {
  const { cart, setCart } = useState(0);

  const addToCart = () => {
    let selectedProduct = {
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    };
    let isCurrentProductId = false;
    let currentProductId;

      cart.map((product) => {
        if (product.id === item.id) {
          isCurrentProductId = true;
          currentProductId = item.id;
        }

        return currentProductId;
      });

    isCurrentProductId ?
      cart.find(product => product.id === item.id).qty++
    :
      cart.push(selectedProduct);

    setCart(cart);
  };

  return (
    <Card
      key={item.id}
      hoverable
      style={{ width: '240px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      cover={<img alt="example" src={item.image} style={{ width: '240px', height: '300px' }} />}

    >
      <Meta
        title={item.name}
        description={`${item.price} грн.`}
        style={{ textAlign: 'center', marginBottom: '10px' }}
      />
      <Button
        className="button-primary"
        type="primary"
        style={{ margin: '0 auto' }}
        onClick={addToCart}>
        Add to Cart
      </Button>
    </Card>
  );
};
