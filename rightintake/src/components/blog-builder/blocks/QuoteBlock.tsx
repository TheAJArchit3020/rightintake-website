import React from "react";

import styles from "@/components/css/BlogBlocksCss/QuoteBlock.module.css";

interface QuoteBlockData {
  quote: string;
  author?: string;
}

export const QuoteBlock: React.FC<{
  data: QuoteBlockData;
  onChange: (data: QuoteBlockData) => void;
}> = ({ data, onChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>Quote</label>
      <textarea
        rows={3}
        value={data.quote}
        placeholder="Enter quote..."
        onChange={(e) => onChange({ ...data, quote: e.target.value })}
        style={{ width: "100%", marginTop: 6 }}
      />
      <input
        type="text"
        placeholder="Author (optional)"
        value={data.author || ""}
        onChange={(e) => onChange({ ...data, author: e.target.value })}
        style={{ width: "100%", marginTop: 6 }}
      />
    </div>
  );
};

export const renderQuoteBlock = (data: QuoteBlockData) => (
  <blockquote className={`${styles.quoteBlockRender}`}>
    “{data.quote}”
    {data.author && <footer style={{ marginTop: 4 }}>— {data.author}</footer>}
  </blockquote>
);
