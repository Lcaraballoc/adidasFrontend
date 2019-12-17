const auxAddToBag = (Bag, product) => {

  const newBag = Bag.map((item) => {
    const newItem = { ...item };
    if (newItem.name === product.name) {
      newItem.amountToBuy += 1;
      newItem.checkoutPartial = newItem.amountToBuy * newItem.pricing_information.standard_price;
    }
    return newItem;
  });
  return newBag;
};

export default auxAddToBag;
