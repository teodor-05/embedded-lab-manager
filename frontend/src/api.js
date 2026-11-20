export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}

export function fetchComponents() {
  return request("/components");
}

export function createComponent(component) {
  return request("/components", { method: "POST", body: JSON.stringify(component) });
}

export function updateComponent(id, changes) {
  return request(`/components/${id}`, { method: "PATCH", body: JSON.stringify(changes) });
}

export function deleteComponent(id) {
  return request(`/components/${id}`, { method: "DELETE" });
}

export function fetchComponent(id) {
  return request(`/components/${id}`);
}