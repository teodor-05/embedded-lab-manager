import ComponentCard from "./ComponentCard.jsx";

export default function ComponentList({ items }) {
  // Verificarea listei goale
  if (items.length === 0) {
    return <p className="empty">There are no components in the inventory.</p>;
  }

  // Randarea listei cu elemente
  return (
    <ul className="item-list">
      {items.map((item) => (
        <ComponentCard key={item.id} item={item} />
      ))}
    </ul>
  );
}