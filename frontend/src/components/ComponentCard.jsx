const TYPE_LABELS = { 
  Sensor: "Sensor", 
  Actuator: "Actuator", 
  Display: "Display", 
  Microcontroller: "Microcontroller" 
};

export default function ComponentCard({ item, onToggle, onDelete }) {
  return (
    <li className={item.allocated ? "item-card done" : "item-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={item.allocated}
          onChange={() => onToggle(item.id)}
        />
        <div>
          <h3>{item.name}</h3>
          <span className={`badge badge-${item.type.toLowerCase()}`}>
            Type: {TYPE_LABELS[item.type]}
          </span>
        </div>
      </label>
      
      <button
        className="btn-danger"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.name}`}
      >
        Delete
      </button>
    </li>
  );
}