import { Fragment, useState } from "react";

import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [showModal, setShowModal] = useState(false);

  // TODO: update count based on the actual number of items in the cart
  const count = 0;

  // TODO: create modal and show modal with cart information
  let showCartHandler = () => {
    setShowModal(true);
  };

  let hideCartHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart onClose={hideCartHandler} />}
      <button className={styles.button} onClick={showCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{count}</span>
      </button>
    </Fragment>
  );
}

export default HeaderCartButton;
