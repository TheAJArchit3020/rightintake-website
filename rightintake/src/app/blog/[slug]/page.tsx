import { baseurl } from "@/app/Data/Api";
import { notFound } from "next/navigation";

import BlogPageComponent from "@/components/blogdetails/BlogDetailsComponent";

// Step 1: Generate the static params (get all blog slugs for static generation)
export async function generateStaticParams() {
  try {
    const res = await fetch(`${baseurl}/blogs/get-all-blogs`); // Fetch all slugs
    if (!res.ok) {
      console.error("Failed to fetch blog slugs");
      return []; // Return empty array if the fetch fails
    }
    const blogs = await res.json();
    return blogs.map((blog: any) => ({ slug: blog.slug })); // Map to generate params
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

// Step 2: Generate metadata (SEO, Open Graph, etc.)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const res = await fetch(`${baseurl}/blogs/get-all-blogs/${slug}`);
    if (!res.ok) {
      console.error("Failed to fetch blog metadata");
      return {};
    }

    const blog = await res.json();

    if (!blog) return {};

    return {
      title: blog.meta?.ogTitle || blog.title,
      description: blog.meta?.ogDescription || blog.preview,
      keywords: blog.tags,
      openGraph: {
        title: blog.meta?.ogTitle || blog.title,
        description: blog.meta?.ogDescription || blog.preview,
        images: [
          {
            url: blog.meta?.ogImage || blog.banner,
            width: 1200,
            height: 630,
          },
        ],
        type: blog.meta?.ogType || "article",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  try {
    const res = await fetch(`${baseurl}/blogs/get-all-blogs/${slug}`);
    if (!res.ok) {
      console.error("Blog not found, returning 404");
      return notFound(); // If not found, return 404 page
    }

    const blog = await res.json(); // Parse the fetched blog data

    // Ensure the blog data exists
    if (!blog) {
      console.error("Blog data is empty or not found");
      return notFound();
    }

    return <BlogPageComponent blog={blog} />;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return notFound();
  }
}
