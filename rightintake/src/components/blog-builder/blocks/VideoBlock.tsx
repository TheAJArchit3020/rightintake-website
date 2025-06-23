import React from "react";
import styles from "@/components/css/BlogBlocksCss/VideoBlock.module.css";

interface VideoBlockData {
  url: string;
}

interface Props {
  data: VideoBlockData;
  onChange: (data: VideoBlockData) => void;
}

export const VideoBlock: React.FC<Props> = ({ data, onChange }) => (
  <div className={styles.wrapper}>
    <label>YouTube Video URL</label>
    <input
      type="text"
      value={data.url}
      onChange={(e) => onChange({ ...data, url: e.target.value })}
    />
  </div>
);

export const renderVideoBlock = (data: VideoBlockData) => {
  const videoId = data.url.split("v=")[1]?.split("&")[0];
  return videoId ? (
    <div className={styles.videoWrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}
      />
    </div>
  ) : null;
};
