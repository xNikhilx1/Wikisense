import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ArticleCard from "./components/ArticleCard";
import { fetchSummary, fetchRandom } from "./services/wikiService";

export default function App() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const search = async (q) => {
    setErr("");
    setLoading(true);
    try {
      const data = await fetchSummary(q);
      setArticle(data);
    } catch (e) {
      setErr("Article not found");
      setArticle(null);
    }
    setLoading(false);
  };

  const random = async () => {
    setErr("");
    setLoading(true);
    try {
      const data = await fetchRandom();
      setArticle(data);
    } catch (e) {
      setErr("Random failed");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>WikiSense</h1>
          <p className="small">Search Wikipedia quickly</p>
        </div>
      </div>

      <SearchBar onSearch={search} onRandom={random} />

      {loading && <p className="small">Loading...</p>}
      {err && <p className="small">{err}</p>}

      <ArticleCard data={article} />
    </div>
  );
}
