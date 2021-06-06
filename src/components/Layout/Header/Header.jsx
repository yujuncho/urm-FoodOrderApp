import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.header}>
      <div className="main-image">
        <img src="" alt="logo" />
      </div>
      <HeaderCartButton />
    </div>
  );
}

export default Header;
