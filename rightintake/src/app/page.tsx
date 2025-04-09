
import MainSection from "@/components/home/MainSection/MainSection";
import styles from "./page.module.css";
import HeaderComponent from "@/components/header/header";
import FeatureSection from "@/components/home/FeatureSection/FeatureSection";
import ReviewSection from "@/components/home/ReviewSection/ReviewSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <div className={`${styles.home_page_container}`}>
        <div className={`${styles.home_page_wrapper}`}>
          <MainSection />
          <FeatureSection />
          <ReviewSection />
        </div>
      </div>
      <Footer/>

    </div>
  );
}
