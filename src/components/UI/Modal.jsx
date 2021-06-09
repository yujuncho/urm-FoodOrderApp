import { Fragment } from "react";

import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.modal}>{props.children}</div>
    </Fragment>
  );
}

export default Modal;
