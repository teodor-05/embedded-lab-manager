import { useState } from "react";
import ComponentList from "./components/ComponentList.jsx";

const INITIAL_COMPONENTS = [
  { id: 1, name: "Ultrasonic Sensor HC-SR04", allocated: false, type: "Sensor", project: "General Lab Use" },
  { id: 2, name: "I2C LCD Display", allocated: true, type: "Display", project: "Digital Safe" },
  { id: 3, name: "Arduino Uno Board", allocated: false, type: "Microcontroller", project: "General Lab Use" },
];

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [components, setComponents] = useState(INITIAL_COMPONENTS);
  const [theme, setTheme] = useState(initialTheme);

  function handleToggle(id) {
    setComponents((prev) =>
      prev.map((c) => (c.id === id ? { ...c, allocated: !c.allocated } : c))
    );
  }

  function handleDelete(id) {
    setComponents((prev) => prev.filter((c) => c.id !== id));
  }

  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  const available = components.filter((c) => !c.allocated).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTheme}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <h1>Embedded Lab Manager</h1>
        <p>Track and allocate electronic components for practical setups.</p>
        <p className="app-count">
          {components.length} components, {available} available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Inventory</h2>
          <ComponentList 
            items={components} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}