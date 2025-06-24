// components/blog-builder/Editor.tsx

"use client";

import React, { useState } from "react";
import { BlogBlock, BlockType } from "./types";

// Import all block components
import { TextBlock } from "./blocks/TextBlock";
import { QuoteBlock } from "./blocks/QuoteBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { VideoBlock } from "./blocks/VideoBlock";
import { CTABlock } from "./blocks/CTABlock";
import { ListBlock } from "./blocks/ListBlock";

type BlockComponentProps<T> = {
  data: T;
  onChange: (data: T) => void;
};

// Map each block type to its corresponding component
const blockComponentMap: Record<
  BlockType,
  React.FC<{ data: any; onChange: (data: any) => void }>
> = {
  text: TextBlock,
  image: ImageBlock,
  quote: QuoteBlock,
  list: ListBlock,
  video: VideoBlock,
  cta: CTABlock,
  button: () => <div>🔘 Button Block (coming soon)</div>,
};

export default function Editor({
  blocks,
  onChange,
}: {
  blocks: BlogBlock[];
  onChange: (blocks: BlogBlock[]) => void;
}) {
  const createDefaultData = (type: BlockType) =>
    ({
      text: { text: "" },
      image: { url: "", alt: "", caption: "" },
      quote: { quote: "", author: "" },
      list: { items: [], type: "unordered" },
      video: { url: "" },
      cta: { label: "", link: "" },
      button: {},
    }[type] ?? {});

  const insertBlockAt = (type: BlockType, index: number) => {
    const newBlock: BlogBlock = {
      id: crypto?.randomUUID?.() || Date.now().toString() + Math.random(),
      type,
      data: createDefaultData(type),
    };
    const updated = [
      ...blocks.slice(0, index),
      newBlock,
      ...blocks.slice(index),
    ];
    onChange(updated);
  };
  const addBlock = (type: BlockType) => {
    const defaultData: any =
      {
        text: { text: "" },
        image: { url: "", alt: "", caption: "" },
        quote: { quote: "", author: "" },
        list: { items: [], type: "unordered" },
        video: { url: "" },
        cta: { label: "", link: "" },
        button: {}, // placeholder if needed
      }[type] ?? {};
    const newBlock: BlogBlock = { type, data: defaultData };
    onChange([...blocks, newBlock]);
  };

  const updateBlock = (index: number, newData: any) => {
    const updated = [...blocks];
    updated[index].data = newData;
    onChange(updated);
  };

  const removeBlock = (index: number) => {
    const updated = blocks.filter((_, i) => i !== index);
    onChange(updated);
  };

  const renderAddBlockMenu = (index: number) => (
    <div style={{ margin: "16px 0", textAlign: "center" }}>
      {Object.keys(blockComponentMap).map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => insertBlockAt(type as BlockType, index)}
          style={{
            margin: "4px",
            padding: "6px 10px",
            cursor: "pointer",
            borderRadius: "4px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
          }}
        >
          ➕ {type}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h3>📝 Blog Content</h3>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponentMap[block.type];
        const key = block.id || `${block.type}-${index}`;
        return (
          <div
            key={key}
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              marginBottom: "16px",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <BlockComponent
              data={block.data}
              onChange={(data) => updateBlock(index, data)}
            />
            <button
              onClick={() => removeBlock(index)}
              style={{ marginTop: 10, color: "red" }}
              type="button"
            >
              🗑 Remove
            </button>
            {renderAddBlockMenu(index + 1)}
          </div>
        );
      })}
      <hr style={{ margin: "1.5rem 0" }} />
      <h2>🧱 Add Content Block</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {Object.keys(blockComponentMap).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => addBlock(type as BlockType)}
            style={{ padding: "8px 16px", cursor: "pointer" }}
          >
            ➕ {type}
          </button>
        ))}
      </div>
    </div>
  );
}
