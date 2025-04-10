import styles from "./BlogDetails.module.css";
import HeaderComponent from "../header/header";
import Footer from "../footer/footer";
import Head from "next/head";

type BlogContentBlock = {
  heading?: string;
  paragraph: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
};
type Blog = {
  slug: string;
  title: string;
  date: string;
  banner: string;
  tags: string[];
  preview: string;
  cta?: { link: string; text: string };
  content: BlogContentBlock[];
};

type BlogPageComponentProps = {
  blog: Blog;
};

export default function BlogPageComponent({ blog }: BlogPageComponentProps) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.preview,
              image: blog.banner,
              author: {
                "@type": "Person",
                name: "Right Intake Team",
              },
              datePublished: blog.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://rightintake.com/blogs/${blog.slug}`,
              },
            }),
          }}
        />
      </Head>
      <HeaderComponent />
      <div className={`${styles.blog_detail}`}>
        <img
          className={`${styles.blog_banner}`}
          src={blog.banner}
          alt={blog.title}
        />
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
                  <p
                    dangerouslySetInnerHTML={{ __html: section.paragraph }}
                  ></p>
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
}
