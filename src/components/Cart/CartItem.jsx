import styles from "./CartItem.module.css";

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>{price}</div>
          <div className={styles.amount}>x {props.amount}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onRemove}>
          -
        </button>
        <button type="button" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
