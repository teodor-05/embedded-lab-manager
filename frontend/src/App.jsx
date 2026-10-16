const components = [
  { id: 1, name: "Ultrasonic Sensor HC-SR04", allocated: false, type: "Sensor", project: "General Lab Use" },
  { id: 2, name: "I2C LCD Display", allocated: true, type: "Display", project: "Digital Safe" },
  { id: 3, name: "Arduino Uno Board", allocated: false, type: "Microcontroller", project: "General Lab Use" },
];

export default function App() {
  const available = components.filter((c) => !c.allocated).length;

  return (
    <>
      <header className="app-header">
        <h1>Embedded Lab Manager</h1>
        <p>Track and allocate electronic components for practical setups.</p>
        <p className="app-count">
          {components.length} components, {available} available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Inventory</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(components, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}