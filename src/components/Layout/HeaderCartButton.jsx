import { useContext, useState, useEffect } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  const cartContext = useContext(CartContext);
  const cartItemCount = cartContext.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const [isAnimatedBtn, setIsAnimatedBtn] = useState(false);
  const btnClasses = `${styles.button} ${isAnimatedBtn ? styles.bump : ""}`;

  let addBumpAnimation = () => {
    if (cartItemCount > 0) {
      setIsAnimatedBtn(true);
    }

    const bumpTimer = setTimeout(() => {
      setIsAnimatedBtn(false);
    }, 300);

    const cleanup = () => {
      clearTimeout(bumpTimer);
    };

    return cleanup;
  };

  useEffect(addBumpAnimation, [cartItemCount]);

  return (
    <button className={btnClasses} onClick={cartContext.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartItemCount}</span>
    </button>
  );
}

export default HeaderCartButton;
