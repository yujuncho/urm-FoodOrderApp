import { useState } from "react";

import styles from "./CartItem.module.css";
import React from "react";

function CartItem(props) {
  const [itemCount, setItemCount] = useState(1);

  const increaseCountHandler = event => {
    event.preventDefault();
    setItemCount(prevState => ++prevState);
  };

  const decreaseCountHandler = event => {
    event.preventDefault();
    setItemCount(prevState => {
      if (prevState > 0) {
        return --prevState;
      }
      return prevState;
    });
  };

  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>Schnitzel</h2>
        <div className={styles.summary}>
          <div className={styles.price}>$16.50</div>
          <div className={styles.amount}>x {itemCount}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={decreaseCountHandler}>
          -
        </button>
        <button type="button" onClick={increaseCountHandler}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
