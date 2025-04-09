"use client"

import React, { useState, useEffect } from "react";
import { baseurl } from "../Data/Api";
import HeaderComponent from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import styles from "../../components/css/blogs.module.css"

// Define TypeScript interface for the blog data
interface Blog {
    slug: string;
    banner: string;
    title: string;
    date: string;
    preview: string;
    tags: string[];
}

const BlogList: React.FC = () => {
    // State for holding the blog data
    const [blogData, setBlogData] = useState<Blog[]>([]);

    // Fetch blog data on component mount
    useEffect(() => {
        fetch(`${baseurl}/blogs/get-all-blogs`)
            .then((res) => res.json())
            .then((data) => setBlogData(data))
            .catch((err) => console.error("Error fetching blogs", err));
    }, []);

    return (
        <>
            <HeaderComponent />
            <div className={`${styles.blog_list_container}`}>
                {blogData.map((blog) => (
                    <div className={`${styles.blog_card}`} key={blog.slug}>
                        <img src={blog.banner} alt={blog.title} className={`${styles.banner}`} />
                        <div className={`${styles.blog_content}`}>
                            <h2>{blog.title}</h2>
                            <p className={`${styles.blog_date}`}>{blog.date}</p>
                            <p className={`${styles.preview_text}`}>{blog.preview}</p>
                            <div className={`${styles.tags}`}>
                                {blog.tags.map((tag, idx) => (
                                    <span key={idx} className={`${styles.tag}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {/* Link to the individual blog post based on slug */}
                            <Link href={`/blog/${blog.slug}`}>
                                <span className={`${styles.read_more}`}>Read Article →</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default BlogList;
