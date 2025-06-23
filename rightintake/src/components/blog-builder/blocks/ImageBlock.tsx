import React from "react";
import { BlogBlock } from "../types";
import styles from "@/components/css/BlogBlocksCss/ImageBlock.module.css";

interface ImageBlockData {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  data: ImageBlockData;
  onChange: (data: ImageBlockData) => void;
}

export const ImageBlock: React.FC<Props> = ({ data, onChange }) => (
  <div className={styles.wrapper}>
    <label>Image URL</label>
    <input
      type="text"
      value={data.src || ""}
      onChange={(e) => onChange({ ...data, src: e.target.value })}
    />

    <label>Alt Text</label>
    <input
      type="text"
      value={data.alt || "rightintake Blog Image"}
      onChange={(e) => onChange({ ...data, alt: e.target.value })}
    />

    <label>Caption (optional)</label>
    <input
      type="text"
      value={data.caption || ""}
      onChange={(e) => onChange({ ...data, caption: e.target.value })}
    />

    {data.src && (
      <img src={data.src} alt={data.alt} className={styles.preview} />
    )}
  </div>
);

export const renderImageBlock = (data: ImageBlockData) => (
  <div className={styles.renderWrapper}>
    <img src={data.src} alt={data.alt} className={styles.preview} />
    {data.caption && <p className={styles.caption}>{data.caption}</p>}
  </div>
);
