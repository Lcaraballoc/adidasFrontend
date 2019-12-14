import React from 'react';
import '../assets/styles/components/Mainboard.scss';
import ProductInBasket from './ProductInBasket';
import OrderSummary from './OrderSummary';

const Mainboard = () => {
  return (
    <section>
      <div className='container'>
        <div className='title'>
          <h1>THE BAG</h1>
          <a href='/'>CONTINUE SHOPPING</a>
          <h3>TOTAL PRODUCTOS : 100$</h3>
        </div>
        <div className='products'>
          <ProductInBasket />
          <ProductInBasket />
          <ProductInBasket />
        </div>
        <div className='resume'>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default Mainboard;

