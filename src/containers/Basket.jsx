import React from 'react';
import { connect } from 'react-redux';
import DiscountsBar from '../components/DiscountsBar';
import ProductInBasket from '../components/ProductInBasket';
import OrderSummary from '../components/OrderSummary';
import { calculateTotal } from '../actions';
import '../assets/styles/components/Basket.scss';

const Basket = (props) => {

  const handleTotal = () => {
    props.calculateTotal();
  };

  handleTotal();

  const { productList, total } = props;
  return (
    <section>
      <DiscountsBar />
      <div className='basket__container'>
        <div className='basket__container--title'>
          <h1>THE BAG</h1>
          <a href='#'>CONTINUE SHOPPING</a>
          <h3>{`TOTAL PRODUCTOS : $${total}`}</h3>
        </div>
        <div className='basket__container--products'>
          {productList.map((item) => <ProductInBasket key={item.id} {...item} />)}
        </div>
        <div className='basket__container--resume'>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.products,
    total: state.total,
  };
};

const mapDispathToProps = {
  calculateTotal,
};

export default connect(mapStateToProps, mapDispathToProps)(Basket);
