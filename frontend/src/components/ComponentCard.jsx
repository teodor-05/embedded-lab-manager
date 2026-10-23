// Un singur element din listă, primit prin props.
const TYPE_LABELS = { 
  Sensor: "Sensor", 
  Actuator: "Actuator", 
  Display: "Display", 
  Microcontroller: "Microcontroller" 
};

export default function ComponentCard({ item }) {
  return (
    <li className={item.allocated ? "item-card done" : "item-card"}>
      <div>
        <h3>{item.name}</h3>
        <span className={`badge badge-${item.type.toLowerCase()}`}>
          Type: {TYPE_LABELS[item.type]}
        </span>
      </div>
      <span className="status">{item.allocated ? "Allocated" : "Available"}</span>
    </li>
  );
}