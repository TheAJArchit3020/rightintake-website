// components/blog-builder/blocks/TextBlock.tsx
"use client";
import React from "react";

import { TextBlockData } from "../types";
import styles from "@/components/css/BlogBlocksCss/TextBlock.module.css";
import Tiptap from "@/components/TipTap/Tiptap";

interface TextBlockProps {
  data: TextBlockData;
  onChange: (data: TextBlockData) => void;
}

export const TextBlock: React.FC<TextBlockProps> = ({ data, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Text Block</span>
      <Tiptap
        description={data.text || "<p></p>"}
        onChange={(html: string) => onChange({ text: html })}
      />
    </div>
  );
};

export const renderTextBlock = (data: TextBlockData) => {
  return (
    <div className={`${styles.renderPara}`} style={{ marginBottom: 20 }}>
      <p dangerouslySetInnerHTML={{ __html: data.text }} />
    </div>
  );
};
