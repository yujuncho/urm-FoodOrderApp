import { useState } from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [inputValue, setInputValue] = useState(1);

  let inputChangeHandler = event => {
    setInputValue(parseInt(event.target.value));
  };

  let submitHandler = event => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: inputValue,
          onChange: inputChangeHandler
        }}
      ></Input>
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
