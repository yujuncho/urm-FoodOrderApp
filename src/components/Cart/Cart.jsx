import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";

function Cart() {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartContext.addItem(item);
  };

  const cancelCheckoutHandler = () => {
    setIsCheckout(false);
    cartContext.onHideCart();
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  if (!cartContext.isCartSeen) return null;

  let cartItems = cartContext.items.map(item => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const modalActions = (
    <div className={styles.actions}>
      <button
        type="button"
        className={styles["button--alt"]}
        onClick={cartContext.onHideCart}
      >
        Close
      </button>
      {hasItems && (
        <button type="button" className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClick={cartContext.onHideCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={cancelCheckoutHandler} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}

export default Cart;
