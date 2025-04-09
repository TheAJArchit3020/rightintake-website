"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import { baseurl } from "@/app/Data/Api";
import styles from "@/components/css/createblog.module.css";

interface ContentSection {
    heading: string;
    paragraph: string;
    image: string;
    imageAlt: string;
}

interface FormState {
    title: string;
    slug: string;
    date: string;
    banner: string;
    tags: string;
    preview: string;
    ctaText: string;
    ctaLink: string;
    content: ContentSection[];
}

const BlogCreate: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        title: "",
        slug: "",
        date: "",
        banner: "",
        tags: "",
        preview: "",
        ctaText: "",
        ctaLink: "",
        content: [{ heading: "", paragraph: "", image: "", imageAlt: "" }],
    });

    const updateForm = (key: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const updateContent = (index: number, key: keyof ContentSection, value: string) => {
        const updatedContent = [...form.content];
        updatedContent[index][key] = value;
        setForm((prev) => ({ ...prev, content: updatedContent }));
    };

    const addSection = () => {
        setForm((prev) => ({
            ...prev,
            content: [...prev.content, { heading: "", paragraph: "", image: "", imageAlt: "" }],
        }));
    };

    const removeSection = (index: number) => {
        const updatedContent = form.content.filter((_, i) => i !== index);
        setForm((prev) => ({ ...prev, content: updatedContent }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseurl}/blogs/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Blog saved successfully!");
                setForm({
                    title: "",
                    slug: "",
                    date: "",
                    banner: "",
                    tags: "",
                    preview: "",
                    ctaText: "",
                    ctaLink: "",
                    content: [{ heading: "", paragraph: "", image: "", imageAlt: "" }],
                });
            } else {
                alert("❌ Failed to save blog: " + data.message);
            }
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("❌ Error saving blog. Check console.");
        }
    };

    return (
        <div className={styles.blog_create_container}>
            <h1>Create New Blog</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Blog Title"
                    value={form.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("title", e.target.value)}
                />
                <input
                    placeholder="Slug"
                    value={form.slug}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("slug", e.target.value)}
                />
                <input
                    type="date"
                    value={form.date}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("date", e.target.value)}
                />
                <input
                    placeholder="Banner Image URL"
                    value={form.banner}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("banner", e.target.value)}
                />
                <input
                    placeholder="Tags (comma separated)"
                    value={form.tags}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("tags", e.target.value)}
                />
                <textarea
                    placeholder="Preview Text"
                    value={form.preview}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateForm("preview", e.target.value)}
                />

                <h3>CTA</h3>
                <input
                    placeholder="CTA Text"
                    value={form.ctaText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("ctaText", e.target.value)}
                />
                <input
                    placeholder="CTA Link"
                    value={form.ctaLink}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateForm("ctaLink", e.target.value)}
                />

                <h2>Blog Sections</h2>
                {form.content.map((section, index) => (
                    <div key={index} className={styles.section_block}>
                        <input
                            placeholder="Heading"
                            value={section.heading}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                updateContent(index, "heading", e.target.value)
                            }
                        />
                        <textarea
                            placeholder="Paragraph (HTML supported)"
                            value={section.paragraph}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                updateContent(index, "paragraph", e.target.value)
                            }
                        />
                        <h2>Paragraph preview:</h2>
                        <p dangerouslySetInnerHTML={{ __html: section.paragraph }}></p>
                        <input
                            placeholder="Image URL"
                            value={section.image}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                updateContent(index, "image", e.target.value)
                            }
                        />
                        <h2>Image preview:</h2>
                        <img src={section.image || " "} alt={section.imageAlt || "Blog Image"} width="100%" />
                        <input
                            placeholder="Image Alt Text"
                            value={section.imageAlt}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                updateContent(index, "imageAlt", e.target.value)
                            }
                        />
                        <button type="button" onClick={() => removeSection(index)}>
                            Remove Section
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addSection}>
                    + Add Section
                </button>

                <br />
                <button type="submit">Save Blog</button>
            </form>
        </div>
    );
};

export default BlogCreate;
