import styles from "./PinnedBlogsSection.module.css";
import Link from "next/link";

export default function PinnedBlogsSection({ blogs }: { blogs: any[] }) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <>
      <div className={styles.featuredWrapper}>
        <h2 className={styles.heading}>Featured Stories</h2>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog._id}>
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <a aria-label={blog.title} href={`/blog/${blog.slug}`}>
                    <div className={styles.imagelinkWrapper}>
                      <div className={styles.imageBoxSizing}></div>
                      <img
                        src={blog.banner}
                        alt={blog.title}
                        className={styles.blogBanner}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <h3 className={styles.title}>
                <a href={`/blog/${blog.slug}`}>{blog.title}</a>
              </h3>
              <div className={styles.date}>
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className={styles.preview}>{blog.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
