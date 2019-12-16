import React from 'react';
import { connect } from 'react-redux';
import Discounts from '../components/DiscountsBar';
import '../assets/styles/components/Basket.scss';
import ProductInBasket from '../components/ProductInBasket';
import OrderSummary from '../components/OrderSummary';

const Basket = ({ productList }) => {
  console.log(productList);
  return (
    <section>
      <Discounts />
      <div className='container'>
        <div className='title'>
          <h1>THE BAG</h1>
          <a href='/'>CONTINUE SHOPPING</a>
          <h3>TOTAL PRODUCTOS : 100$</h3>
        </div>
        <div className='products'>
          {productList.map((item) =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ProductInBasket key={item.id} {...item} />)
          }
        </div>
        <div className='resume'>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products,
  };
};

export default connect(mapStateToProps, null)(Basket);
