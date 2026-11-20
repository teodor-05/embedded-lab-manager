import { Link } from "react-router-dom";
import { TYPE_LABELS } from "../constants.js";
import styles from "./ComponentCard.module.css";

export default function ComponentCard({ item, onToggle, onDelete }) {
  return (
    <li
      className={item.allocated ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={item.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={item.allocated}
          onChange={() => onToggle(item.id)}
          aria-label={`Allocate ${item.name}`}
          data-testid="item-toggle"
        />
        <div>
          <Link to={`/components/${item.id}`} className={styles.title} data-testid="item-link">
            {item.name}
          </Link>
          <span className={`badge badge-${item.type.toLowerCase()}`}>
            Type: {TYPE_LABELS[item.type]}
          </span>
        </div>
      </div>
      
      <button
        className="btn-danger"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.name}`}
        data-testid="item-delete"
      >
        Delete
      </button>
    </li>
  );
}