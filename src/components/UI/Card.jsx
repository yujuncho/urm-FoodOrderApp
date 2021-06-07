import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${props.classes} ${styles.card}`}>{props.children}</div>
  );
}

export default Card;
