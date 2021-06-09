import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Modal(props) {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.modal}>{props.children}</div>
    </Fragment>,
    document.getElementById("body")
  );
}

export default Modal;
