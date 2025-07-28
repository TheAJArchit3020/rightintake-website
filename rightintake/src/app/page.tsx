import MainSection from "@/components/home/MainSection/MainSection";
import styles from "./page.module.css";
import HeaderComponent from "@/components/header/header";
import BeniftisSection from "@/components/home/FeatureSection/BeniftsSection";
import ReviewSection from "@/components/home/ReviewSection/ReviewSection";
import Footer from "@/components/footer/footer";
import PinnedBlogsSection from "@/components/home/PinnedBlogSection/PinnedBlogSection";
import { baseurl } from "./Data/Api";
import CTASection from "@/components/home/CTASection/CTASection";
import AppVideoSection from "@/components/home/AppVideoSection/AppVideoSection";

async function getPinnedBlogs() {
  try {
    const res = await fetch(`${baseurl}/blogs/pinned`, {
      next: { revalidate: 60 }, // optional ISR
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch pinned blogs:", err);
    return [];
  }
}
export default async function Home() {
  const blogs = await getPinnedBlogs();
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <div className={`${styles.home_page_container}`}>
        <div className={`${styles.home_page_wrapper}`}>
          <MainSection />
          <BeniftisSection />
        </div>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}
