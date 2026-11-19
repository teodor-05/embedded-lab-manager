const TYPE_LABELS = { 
  Sensor: "Sensor", 
  Actuator: "Actuator", 
  Display: "Display", 
  Microcontroller: "Microcontroller" 
};

export default function ComponentCard({ item, onToggle, onDelete }) {
  return (
    <li className={item.allocated ? "item-card done" : "item-card"} data-testid="item" data-id={item.id}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={item.allocated}
          onChange={() => onToggle(item.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{item.name}</h3>
          <span className={`badge badge-${item.type.toLowerCase()}`}>
            Type: {TYPE_LABELS[item.type]}
          </span>
        </div>
      </label>
      
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