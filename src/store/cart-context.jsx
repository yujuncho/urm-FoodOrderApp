import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  isCartSeen: false,
  onShowCart: () => {},
  onHideCart: () => {}
});

export default CartContext;
