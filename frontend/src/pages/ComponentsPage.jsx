import { useEffect, useState } from "react";
import ComponentList from "../components/ComponentList.jsx";
import ComponentForm from "../components/ComponentForm.jsx";
import { fetchComponents, createComponent, updateComponent, deleteComponent } from "../api.js";
import styles from "./ComponentsPage.module.css";

export default function ComponentsPage() {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const available = components.filter((c) => !c.allocated).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Add Component</h2>
        <ComponentForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Inventory</h2>
        <p className={styles.summary}>
          {components.length} components, {available} available
        </p>
        
        {loading && <p className="info" data-testid="loading">Loading inventory...</p>}
        {error && <p className="error" data-testid="error">{error}</p>}
        
        {!loading && (
          <ComponentList 
            items={components} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        )}
      </section>
    </div>
  );
}