import React from 'react';
import Header from '../components/Header';
import Discounts from '../components/DiscountsBar';
import Mainboard from '../components/Mainboard';

const Basket = () => {
  return (
    <div>
      <Discounts />
      <Mainboard />
    </div>
  );
};

export default Basket;
