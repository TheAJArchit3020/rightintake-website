import React from "react";
import styles from "@/components/css/BlogBlocksCss/CTABlock.module.css";

interface CTAData {
  text: string;
  link: string;
}

interface Props {
  data: CTAData;
  onChange: (data: CTAData) => void;
}

export const CTABlock: React.FC<Props> = ({ data, onChange }) => (
  <div className={styles.wrapper}>
    <label>CTA Text</label>
    <input
      type="text"
      value={data.text || ""}
      onChange={(e) => onChange({ ...data, text: e.target.value })}
    />

    <label>CTA Link</label>
    <input
      type="text"
      value={data.link || ""}
      onChange={(e) => onChange({ ...data, link: e.target.value })}
    />
  </div>
);

export const renderCTABlock = (data: CTAData) => (
  <div className={styles.ctaRender}>
    <a href={data.link} className={styles.ctaButton}>
      {data.text}
    </a>
  </div>
);
