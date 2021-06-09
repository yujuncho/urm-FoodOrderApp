import { useState, useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const addItem = (item, state) => {
  const updatedTotalAmount = state.totalAmount + item.amount * item.price;

  // Code from lecture
  const existingCartItemIndex = state.items.findIndex(
    stateItem => stateItem.id === item.id
  );
  const existingCartItem = state.items[existingCartItemIndex];
  let updatedItems;

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + item.amount
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat(item);
  }

  /*
  My first pass

  const updatedItems = [...state.items];
  const itemFromList = updatedItems.filter(i => i.id === item.id)[0];
  if (itemFromList) {
    itemFromList.amount += item.amount;
  } else {
    updatedItems.push(item);
  }
  */
  return { items: updatedItems, totalAmount: updatedTotalAmount };
};

const removeItem = (id, state) => {
  // Code from lecture
  const existingCartItemIndex = state.items.findIndex(
    stateItem => stateItem.id === id
  );
  const existingCartItem = state.items[existingCartItemIndex];
  const updatedTotalAmount = state.totalAmount - existingCartItem.price;
  let updatedItems;

  if (existingCartItem.amount === 1) {
    updatedItems = state.items.filter(item => item.id !== id);
  } else {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount - 1
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  }

  /*
  My First Pass

  let updatedItems = [];
  let updatedTotalAmount = state.totalAmount;
  for (let i = 0; i < state.items.length; i++) {
    let item = state.items[i];
    if (item.id === id) {
      if (item.amount > 1) {
        item.amount--;
        updatedItems.push(item);
      }
      updatedTotalAmount -= item.price;
    } else {
      updatedItems.push(item);
    }
  }
  */
  return { items: updatedItems, totalAmount: updatedTotalAmount };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(action.item, state);
    case "REMOVE":
      return removeItem(action.id, state);
    default:
      return defaultCartState;
  }
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const [isCartSeen, setIsCartSeen] = useState(false);

  let showCartHandler = () => {
    setIsCartSeen(true);
  };

  let hideCartHandler = () => {
    setIsCartSeen(false);
  };

  let addCartItemHandler = item => {
    dispatchCartAction({
      type: "ADD",
      item: item
    });
  };

  let removeCartItemHandler = id => {
    dispatchCartAction({
      type: "REMOVE",
      id: id
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
    isCartSeen: isCartSeen,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
