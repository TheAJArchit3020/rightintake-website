"use client";
import React, { useEffect, useState, FormEvent } from "react";
import { useParams } from "next/navigation";

import Editor from "@/components/blog-builder/Editor";
import Preview from "@/components/blog-builder/Preview";

import { BlogBlock } from "@/components/blog-builder/types";
import { baseurl } from "@/app/Data/Api";
import styles from "@/components/css/createblog.module.css";

export default function BlogEditPage() {
  const { id } = useParams() as { id: string };
  const [loading, setLoading] = useState(true);

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
  const [pinned, setPinned] = useState(false);

  // Load existing blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${baseurl}/blogs/get-blog/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Fetch failed");

        setTitle(data.title);
        setSlug(data.slug);
        setDate(new Date(data.date));
        setTags(data.tags.join(", "));
        setBanner(data.banner);
        setBlocks(data.content || []);
        setMetaTitle(data.metaTitle);
        setMetaDescription(data.metaDescription);
        setOgImage(data.ogImage);
        setKeywords(data.keywords.join(", "));
        setPreview(data.preview);
      } catch (err) {
        alert("Failed to load blog");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    const blogData = {
      title,
      slug,
      date: date.toISOString(),
      tags: tags.split(",").map((t) => t.trim()),
      banner,
      content: blocks,
      metaTitle,
      metaDescription,
      preview,
      ogImage,
      pinned,
      keywords: keywords.split(",").map((k) => k.trim()),
    };

    try {
      const res = await fetch(`${baseurl}/blogs/update-blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(blogData),
      });
      const data = await res.json();

      if (res.ok) {
        alert("✅ Blog updated!");
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Unexpected error. See console.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>Edit Blog Post</h1>
      <div className={styles.toggleTabs}>
        <button
          onClick={() => setView("create")}
          className={view === "create" ? styles.activeTab : ""}
        >
          🛠 Edit
        </button>
        <button
          onClick={() => setView("preview")}
          className={view === "preview" ? styles.activeTab : ""}
        >
          👁 Preview
        </button>
      </div>
      {view === "create" ? (
        <form onSubmit={handleUpdate} className={styles.form}>
          <label className={styles.formLabel}>
            <input
              type="checkbox"
              checked={pinned}
              onChange={(e) => setPinned(e.target.checked)}
            />
            📌 Pin this blog to homepage
          </label>
          <input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="Banner Image URL"
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
            className={styles.formInput}
          />
          <input
            placeholder="Preview text"
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
            className={styles.formInput}
          />
          <input
            type="date"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className={styles.formInput}
          />
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
            placeholder="SEO Keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className={styles.formInput}
          />

          <Editor blocks={blocks} onChange={setBlocks} />

          <button type="submit" className={styles.submitButton}>
            💾 Update Blog
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
}
