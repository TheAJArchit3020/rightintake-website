import styles from "./BlogDetails.module.css";
import HeaderComponent from "../header/header";
import Footer from "../footer/footer";
import Head from "next/head";

type BlockType = "text" | "image" | "quote" | "video" | "cta" | "button";
type BlogBlock = {
  type: BlockType;
  data: any; // You can refine this if needed per block
};

type Blog = {
  slug: string;
  title: string;
  date: string;
  banner: string;
  tags: string[];
  preview: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  keywords?: string[];
  content: BlogBlock[];
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
              headline: blog.metaTitle || blog.title,
              description: blog.metaDescription || blog.preview,
              image: blog.ogImage || blog.banner,
              author: {
                "@type": "Person",
                name: "Right Intake Team",
              },
              datePublished: blog.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://rightintake.com/blog/${blog.slug}`,
              },
            }),
          }}
        />
      </Head>
      <HeaderComponent />
      <div className={`${styles.blog_detail}`}>
        <div className={`${styles.blog_content_container}`}>
          <div className={`${styles.blog_body}`}>
            <div className={`${styles.blog_header}`}>
              <h1>{blog.title}</h1>
              <p className={`${styles.blog_date}`}>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <img
              className={`${styles.blog_banner}`}
              src={blog.banner}
              alt={blog.title}
            />
            {blog.tags && (
              <p className={`${styles.blogTags}`}>
                {blog.tags.map((tag) => (
                  <span key={tag} style={{ marginRight: 8 }}>
                    #{tag.trim()}
                  </span>
                ))}
              </p>
            )}
            {blog.content.map((block, index) => {
              switch (block.type) {
                case "text":
                  return (
                    <div key={index} className={styles.renderPara}>
                      <div
                        dangerouslySetInnerHTML={{ __html: block.data.text }}
                      />
                    </div>
                  );

                case "image":
                  return (
                    <div key={index} className={styles.blog_section}>
                      <img
                        src={block.data.src}
                        alt={block.data.alt || ""}
                        className={styles.blog_image}
                      />
                    </div>
                  );

                case "quote":
                  return (
                    <blockquote key={index} className={styles.quoteBlockRender}>
                      “{block.data.quote}”
                    </blockquote>
                  );

                case "video":
                  return (
                    <div key={index} className={styles.blog_video}>
                      <iframe
                        src={block.data.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className={styles.iframe}
                        allowFullScreen
                        title={`video-${index}`}
                      />
                    </div>
                  );

                case "cta":
                  return (
                    <div key={index} className={styles.blog_cta_btn}>
                      <a href={block.data.link} className={styles.blog_cta_a}>
                        {block.data.text}
                      </a>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
