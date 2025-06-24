import { baseurl } from "../Data/Api";
import HeaderComponent from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import styles from "../../components/css/blogs.module.css";

// Define TypeScript interface for the blog data
interface Blog {
  slug: string;
  banner: string;
  title: string;
  date: string;
  preview: string;
  tags: string[];
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${baseurl}/blogs/get-all-blogs`, {
    // cache: "no-store", // ❌ disable this if using static generation
    next: { revalidate: 60 }, // ✅ revalidates every 60 seconds (ISR)
  });
  return res.json();
}

export const metadata = {
  title: "Right Intake Blogs - Nutrition Tips, Health Insights & Diet Advice",
  description:
    "Explore expert-written nutrition blogs on Right Intake. Get actionable tips, health insights, diet strategies, and find the right plan from certified nutritionists.",
  keywords: [
    "nutrition blogs",
    "diet tips",
    "healthy eating",
    "meal plans",
    "nutritionist advice",
    "Right Intake",
    "health blogs",
    "dietitian blog",
    "weight loss",
    "balanced diet",
  ],
  alternates: {
    canonical: "https://rightintake.com/blog",
  },
  openGraph: {
    title: "Right Intake Blogs - Nutrition Tips, Health Insights & Diet Advice",
    description:
      "Discover in-depth nutrition advice, diet plans, and health tips from top certified nutritionists at Right Intake.",
    url: "https://rightintake.com/blogs",
    siteName: "Right Intake",

    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Right Intake Blogs",
    description:
      "Read expert blogs from top Indian nutritionists on diet, fitness, and health.",
  },
};

export default async function BlogList() {
  // State for holding the blog data
  const blogData = await fetchBlogs();

  // Fetch blog data on component mount

  return (
    <>
      <HeaderComponent />
      <div className={`${styles.blog_list_container}`}>
        {blogData.map((blog) => (
          <div className={`${styles.blog_card}`} key={blog.slug}>
            <img
              src={blog.banner}
              alt={blog.title}
              className={`${styles.banner}`}
            />
            <div className={`${styles.blog_content}`}>
              <h1>{blog.title}</h1>
              <p className={`${styles.blog_date}`}>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className={`${styles.preview_text}`}>{blog.preview}</p>
              <div className={`${styles.tags}`}>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className={`${styles.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`/blog/${blog.slug}`}>
                <span className={`${styles.read_more}`}>Read Article →</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
