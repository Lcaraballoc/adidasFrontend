export const addProduct = (payload) => ({
  type: 'ADD_PRODUCT',
  payload,
});

export const deleteProduct = (payload) => ({
  type: 'DELETE_PRODUCT',
  payload,
});

export const calculateTotal = (payload) => ({
  type: 'CALCULATE_TOTAL',
  payload,
});
