import React, { useState } from "react";

export default function SearchBar({ onSearch, onRandom }) {
  const [q, setQ] = useState("");
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Wikipedia..."
      />
      <button
        className="btn"
        onClick={() => {
          if (q.trim()) onSearch(q.trim());
        }}
      >
        Search
      </button>
      <button
        className="btn"
        onClick={onRandom}
        style={{ background: "#4a5568" }}
      >
        Random
      </button>
    </div>
  );
}
