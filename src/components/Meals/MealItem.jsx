import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

function MealItem(props) {
  return (
    <ul>
      <div className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <MealItemForm />
      </div>
    </ul>
  );
}

export default MealItem;
