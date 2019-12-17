
import auxReducer from './auxReducer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const item = state.products.find((product) => (product.name === action.payload));
      console.log(item.amountToBuy);
      console.log(auxReducer(state.products, item));
      return {
        ...state,
        products: auxReducer(state.products, item),
      };
    }
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        products: state.products.filter((items) => items.name !== action.payload.name),
        total: state.total - action.payload.currentPrice,
        items: state.items - 1,
      };
    }
    case 'CALCULATE_TOTAL': {
      console.log(state.products.map((item) => item.checkoutPartial).reduce((a, v) => a + v, 0));
      return {
        ...state,
        total: state.products.map((item) => item.checkoutPartial).reduce((a, v) => a + v, 0),
      };
    };
    default:
      return state;
  }
};

export default reducer;
