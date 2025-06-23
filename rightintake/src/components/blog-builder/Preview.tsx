// components/blog-builder/Preview.tsx

"use client";

import React from "react";
import { BlogBlock, BlockType } from "./types";

// Import all block renderers
import styles from "@/components/css/preview.module.css";
import { renderTextBlock } from "./blocks/TextBlock";
import { renderQuoteBlock } from "./blocks/QuoteBlock";
import { renderImageBlock } from "./blocks/ImageBlock";
import { renderVideoBlock } from "./blocks/VideoBlock";
import { renderCTABlock } from "./blocks/CTABlock";
import { renderListBlock } from "./blocks/ListBlock";

// Define mapping of block type to renderer function
const renderBlockMap: Record<BlockType, (data: any) => React.ReactNode> = {
  text: renderTextBlock,
  image: renderImageBlock,
  quote: renderQuoteBlock,
  list: renderListBlock,
  video: renderVideoBlock,
  cta: renderCTABlock,
  button: () => <div>🔘 Button Preview (coming soon)</div>,
};

export default function Preview({
  blocks,
  title,
  slug,
  tags,
  banner,
}: {
  blocks: BlogBlock[];
  title?: string;
  slug?: string;
  tags?: string;
  banner?: string;
}) {
  return (
    <div className={`${styles.previewContainer}`}>
      {title && <h1 className={`${styles.blogTitle}`}>{title}</h1>}
      {banner && (
        <img
          src={banner}
          alt="Blog Banner"
          className={`${styles.bannerImage}`}
        />
      )}

      {tags && (
        <p className={`${styles.blogTags}`}>
          {tags.split(",").map((tag) => (
            <span key={tag} style={{ marginRight: 8 }}>
              #{tag.trim()}
            </span>
          ))}
        </p>
      )}

      {blocks.map((block, index) => {
        const renderer = renderBlockMap[block.type];
        return (
          <div key={index} style={{ marginBottom: 50 }}>
            {renderer ? renderer(block.data) : <div>❓ Unknown block</div>}
          </div>
        );
      })}
    </div>
  );
}
