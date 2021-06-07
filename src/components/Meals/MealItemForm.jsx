import { useState } from "react";

import Input from "../UI/Input";

import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [inputValue, setInputValue] = useState(1);

  let inputChangeHandler = event => {
    setInputValue(parseInt(event.target.value));
  };

  let submitHandler = event => {
    event.preventDefault();
    console.log(typeof inputValue);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        id="amount"
        label="Amount"
        type="number"
        value={inputValue}
        onChange={inputChangeHandler}
      ></Input>
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
