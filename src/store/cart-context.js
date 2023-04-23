import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmounnt: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
