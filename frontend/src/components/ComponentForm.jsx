import { useState } from "react";
import { TYPES } from "../constants.js";
import styles from "./ComponentForm.module.css";

const MAX_NAME_LENGTH = 100;

export default function ComponentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Sensor");
  const [project, setProject] = useState("");
  
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  function validate() {
    const trimmedName = name.trim();
    const trimmedProject = project.trim();
    
    if (trimmedName === "") return "Component name is required.";
    if (trimmedName.length > MAX_NAME_LENGTH) return `Name cannot exceed ${MAX_NAME_LENGTH} characters.`;
    if (trimmedProject === "") return "Project name is required.";
    
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsSending(true);

    try {
      await onAdd({ name: name.trim(), type, project: project.trim(), allocated: false });
      setName("");
      setType("Sensor");
      setProject("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Component Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Ultrasonic Sensor HC-SR04"
          maxLength={MAX_NAME_LENGTH}
          aria-invalid={Boolean(error)}
          data-testid="form-title"
        />
      </label>

      <label>
        Type
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          data-testid="form-type"
        >
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </label>

      <label>
        Project Target
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Ex: Digital Safe"
          data-testid="form-project"
        />
      </label>

      {error && <p className="error" data-testid="form-error">{error}</p>}

      <button type="submit" disabled={isSending} data-testid="form-submit" className="btn">
        {isSending ? "Saving..." : "Add Component"}
      </button>
    </form>
  );
}