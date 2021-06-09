import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import styles from "./MealItem.module.css";

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    });
  };

  return (
    <li>
      <div className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
