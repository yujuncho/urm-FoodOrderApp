import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  // TODO: update count based on the actual number of items in the cart
  const count = 0;

  // TODO: create modal and show modal with cart information
  let showCartHandler = () => {
    console.log("Show modal");
  };

  return (
    <button className={styles.button} onClick={showCartHandler}>
      <span className={styles.icon}></span>
      Your Cart
      <span className={styles.badge}>{count}</span>
    </button>
  );
}

export default HeaderCartButton;
