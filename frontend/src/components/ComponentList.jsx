import ComponentCard from "./ComponentCard.jsx";

export default function ComponentList({ items, onToggle, onDelete }) {
  if (items.length === 0) {
    return <p className="empty">There are no components in the inventory.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <ComponentCard 
          key={item.id} 
          item={item} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}