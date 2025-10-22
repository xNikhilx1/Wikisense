import React from "react";

export default function ArticleCard({ data }) {
  if (!data) return null;
  return (
    <div className="card">
      {data.thumbnail?.source && (
        <img src={data.thumbnail.source} alt="thumb" className="thumb" />
      )}
      <h2>{data.title}</h2>
      <p className="small">{data.description}</p>
      <p>{data.extract}</p>
      <a
        href={
          data.content_urls?.desktop?.page ||
          `https://en.wikipedia.org/wiki/${encodeURIComponent(data.title)}`
        }
        target="_blank"
        rel="noreferrer"
      >
        Read on Wikipedia ↗
      </a>
    </div>
  );
}
