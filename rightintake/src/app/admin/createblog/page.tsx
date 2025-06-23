"use client";

import React, { useState, FormEvent } from "react";
import Editor from "@/components/blog-builder/Editor";
import Preview from "@/components/blog-builder/Preview";
import { BlogBlock } from "@/components/blog-builder/types";
import { baseurl } from "@/app/Data/Api";
import styles from "@/components/css/createblog.module.css";

const BlogCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [slug, setSlug] = useState("");
  const [tags, setTags] = useState("");
  const [banner, setBanner] = useState("");
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);
  const [view, setView] = useState<"create" | "preview">("create");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const blogData = {
      title,
      slug,
      date: date.toISOString(),
      tags: tags.split(",").map((tag) => tag.trim()),
      banner,
      metaTitle,
      metaDescription,
      ogImage,
      preview,
      keywords: keywords.split(",").map((k) => k.trim()),
      content: blocks,
    };

    try {
      const response = await fetch(`${baseurl}/blogs/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Blog saved successfully!");
        setTitle("");
        setSlug("");
        setTags("");
        setBanner("");
        setMetaTitle("");
        setMetaDescription("");
        setOgImage("");
        setKeywords("");
        setPreview("");
        setBlocks([]);
      } else {
        alert("❌ Failed to save blog: " + data.message);
      }
    } catch (err) {
      console.error("Error saving blog:", err);
      alert("❌ Unexpected error. See console.");
    }
  };
  return (
    <div className={styles.container}>
      <h1>Create Blog Post</h1>
      <div className={styles.toggleTabs}>
        <button
          onClick={() => setView("create")}
          className={view === "create" ? styles.activeTab : ""}
        >
          🛠 Create
        </button>
        <button
          onClick={() => setView("preview")}
          className={view === "preview" ? styles.activeTab : ""}
        >
          👁 Preview
        </button>
      </div>
      {view === "create" ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Metadata inputs */}
          <input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={`${styles.formInput}`}
          />
          <input
            placeholder="Slug (URL)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className={`${styles.formInput}`}
          />
          <input
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className={`${styles.formInput}`}
          />
          <input
            placeholder="Banner Image URL"
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
            className={`${styles.formInput}`}
          />
          <input
            placeholder="preview text"
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
            className={`${styles.formInput}`}
          />
          <input
            type="date"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className={`${styles.formInput}`}
          />
          {/* SEO Metadata */}
          <input
            placeholder="Meta Title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className={styles.formInput}
          />
          <textarea
            placeholder="Meta Description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="OG Image URL"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="SEO Keywords (comma separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className={styles.formInput}
          />

          {/* CTA */}
          <Editor blocks={blocks} onChange={setBlocks} />

          <button type="submit" className={styles.submitButton}>
            ✅ Save Blog
          </button>
        </form>
      ) : (
        <Preview
          blocks={blocks}
          title={title}
          slug={slug}
          tags={tags}
          banner={banner}
        />
      )}
    </div>
  );
};

export default BlogCreate;
