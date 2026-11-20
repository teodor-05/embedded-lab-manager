import ComponentCard from "./ComponentCard.jsx";
import styles from "./ComponentList.module.css";

export default function ComponentList({ items, onToggle, onDelete }) {
  if (items.length === 0) {
    return <p className="empty" data-testid="empty">There are no components in the inventory.</p>;
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ComponentCard key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}