import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Assortment of food on a table" />
      </div>
    </Fragment>
  );
}

export default Header;
