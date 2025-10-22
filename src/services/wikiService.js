const API_BASE = "https://en.wikipedia.org/api/rest_v1";

export async function fetchSummary(title) {
  const res = await fetch(
    `${API_BASE}/page/summary/${encodeURIComponent(title)}`
  );
  if (!res.ok) throw new Error("Not found");
  return res.json();
}

export async function fetchRandom() {
  const res = await fetch(`${API_BASE}/page/random/summary`);
  if (!res.ok) throw new Error("Random failed");
  return res.json();
}
