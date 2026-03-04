const API_URL = import.meta.env.VITE_API_URL;

export async function getHello() {
  const res = await fetch(`${API_URL}/test/`);
  return res.json();
}