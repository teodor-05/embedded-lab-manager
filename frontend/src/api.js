export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchComponents() {
  const res = await fetch(`${API_URL}/components`);
  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  return res.json();
}