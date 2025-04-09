
import React from "react";
import styles from "./BlogDetails.module.css"
import HeaderComponent from "../header/header";
import Footer from "../footer/footer";

type Blog = {
    title: string;
    date: string;
    banner: string;
    content: { heading: string; paragraph: string; image?: string; imageAlt?: string }[];
    cta?: { link: string; text: string };
};

type BlogPageComponentProps = {
    blog: Blog;
};

const BlogPageComponent: React.FC<BlogPageComponentProps> = ({ blog }) => {
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

export default BlogPageComponent;
