import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
