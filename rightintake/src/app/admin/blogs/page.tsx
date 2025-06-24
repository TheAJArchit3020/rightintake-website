"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { baseurl } from "@/app/Data/Api";
import styles from "@/components/css/EditBlogs/BlogList.module.css";
interface Blog {
  _id: string;
  title: string;
  slug: string;
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${baseurl}/blogs/get-all-blogs`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await fetch(`${baseurl}/blogs/delete-blog/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <li key={blog._id} className={styles.blogItem}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogSlug}>Slug: {blog.slug}</p>
              <div className={styles.actions}>
                <Link
                  href={`/admin/edit/${blog._id}`}
                  className={styles.editBtn}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
