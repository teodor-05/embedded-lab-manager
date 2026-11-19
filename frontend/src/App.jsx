import { useEffect, useState } from "react";
import ComponentList from "./components/ComponentList.jsx";
import ComponentForm from "./components/ComponentForm.jsx";
import { fetchComponents, createComponent, updateComponent, deleteComponent } from "./api.js";

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

  // API calls for Create, Update, Delete
  async function handleAdd(component) {
    const saved = await createComponent(component);
    setComponents((prev) => [...prev, saved]);
  }

  async function handleToggle(id) {
    const item = components.find((c) => c.id === id);
    try {
      const updated = await updateComponent(id, { allocated: !item.allocated });
      setComponents((prev) => prev.map((c) => (c.id === id ? updated : c)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteComponent(id);
      setComponents((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(err.message);
    }
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
        {/* Etapa 7: Panoul pentru formularul de adăugare */}
        <section className="panel">
          <h2>Add Component</h2>
          <ComponentForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Inventory</h2>
          
          {loading && <p className="info" data-testid="loading">Loading inventory...</p>}
          
          {error && (
            <p className="error" data-testid="error">
              Could not load data: {error}. Are you running <code>npm run api</code>?
            </p>
          )}
          
          {/* List renders even if there is an error during toggle/delete */}
          {!loading && (
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