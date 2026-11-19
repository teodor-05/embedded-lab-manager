import { useEffect, useState } from "react";
import ComponentList from "./components/ComponentList.jsx";
import { fetchComponents } from "./api.js";

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // State for components, loading, and errors
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [theme, setTheme] = useState(initialTheme);

  // Fetch data on mount
  useEffect(() => {
    let ignore = false;
    
    async function load() {
      try {
        const data = await fetchComponents();
        if (!ignore) setComponents(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    
    load();
    return () => { ignore = true; };
  }, []);

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
          
          {loading && <p className="info">Loading inventory...</p>}
          
          {error && (
            <p className="error">
              Could not load data: {error}. Are you running <code>npm run api</code>?
            </p>
          )}
          
          {!loading && !error && (
            <ComponentList 
              items={components} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </>
  );
}