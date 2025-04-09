
"use client"

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation
import { baseurl } from "@/app/Data/Api";
import HeaderComponent from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "../../../components/css/blogs.module.css";

interface Blog {
    title: string;
    date: string;
    banner: string;
    content: { heading: string; paragraph: string; image?: string; imageAlt?: string }[];
    cta?: { link: string; text: string };
}

const BlogDetailPage: React.FC = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname(); // Get the pathname of the current URL

    const slug = pathname?.split("/").pop(); // Extract the slug from the URL path

    useEffect(() => {
        if (slug) {
            fetch(`${baseurl}/blogs/get-all-blogs/${slug}`)
                .then((res) => res.json())
                .then((data) => {
                    setBlog(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error loading blog:", err);
                    setLoading(false);
                });
        }
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (!blog) return <div>Blog not found.</div>;

    return (
        <>
            <HeaderComponent />
            <div className={`${styles.blog_detail}`}>
                <img className={`${styles.blog_banner}`} src={blog.banner} alt={blog.title} />
                <div className={`${styles.blog_content_container}`}>
                    <div className={`${styles.blog_body}`}>
                        <div className={`${styles.blog_header}`}>
                            <h1>{blog.title}</h1>
                            <p className={`${styles.blog_date}`}>{blog.date}</p>
                        </div>

                        {blog.content.map((section, index) => (
                            <div key={index} className={`${styles.blog_section}`}>
                                {section.heading && <h2>{section.heading}</h2>}
                                {section.paragraph && (
                                    <p dangerouslySetInnerHTML={{ __html: section.paragraph }}></p>
                                )}
                                {section.image && (
                                    <img
                                        src={section.image}
                                        alt={section.imageAlt || ""}
                                        className={`${styles.blog_image}`}
                                    />
                                )}
                            </div>
                        ))}

                        {blog.cta && (
                            <div className={`${styles.blog_cta_btn}`}>
                                <a href={blog.cta.link} className={`${styles.blog_cta_a}`}>
                                    {blog.cta.text}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetailPage;
