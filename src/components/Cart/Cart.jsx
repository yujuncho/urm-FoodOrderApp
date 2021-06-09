import ReactDOM from "react-dom";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

function Cart(props) {
  const MOCK_ITEMS = [1];
  let cartItemList = MOCK_ITEMS.map((meal, index) => {
    return <CartItem key={index} />;
  });

  const totalAmount = `$33.00`;

  return ReactDOM.createPortal(
    <Modal onClick={props.onClose}>
      <div className={styles["cart-items"]}>{cartItemList}</div>
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        <button type="button" className={styles.button}>
          Order
        </button>
      </div>
    </Modal>,
    document.getElementById("body")
  );
}

export default Cart;
