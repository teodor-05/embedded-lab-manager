import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchComponent } from "../api.js";
import { TYPE_LABELS } from "../constants.js";
import styles from "./ComponentDetailPage.module.css";

export default function ComponentDetailPage() {
  const { id } = useParams();
  const [component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    
    fetchComponent(id)
      .then((data) => {
        if (!ignore) {
          setComponent(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => { ignore = true; };
  }, [id]);

  if (loading) return <p className="info" data-testid="loading">Loading component...</p>;

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">Could not load component: {error}</p>
        <Link to="/">Back to inventory</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>Back to inventory</Link>
      <h2 className={component.allocated ? styles.done : undefined} data-testid="detail-title">
        {component.name}
      </h2>
      <dl className={styles.fields}>
        <dt>Type</dt>
        <dd>
          <span className={`badge badge-${component.type.toLowerCase()}`}>
            {TYPE_LABELS[component.type]}
          </span>
        </dd>
        <dt>Project Target</dt>
        <dd>{component.project}</dd>
        <dt>Status</dt>
        <dd>{component.allocated ? "Allocated" : "Available"}</dd>
        <dt>ID</dt>
        <dd>{component.id}</dd>
      </dl>
    </section>
  );
}