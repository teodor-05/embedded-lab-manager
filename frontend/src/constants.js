export const TYPES = [
  { value: "Sensor", label: "Sensor" },
  { value: "Actuator", label: "Actuator" },
  { value: "Display", label: "Display" },
  { value: "Microcontroller", label: "Microcontroller" },
];

export const TYPE_LABELS = Object.fromEntries(
  TYPES.map((t) => [t.value, t.label])
);