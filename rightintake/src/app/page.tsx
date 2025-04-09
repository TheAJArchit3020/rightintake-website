
import MainSection from "@/components/home/MainSection/MainSection";
import styles from "./page.module.css";
import HeaderComponent from "@/components/header/header";
import FeatureSection from "@/components/home/FeatureSection/FeatureSection";
import ReviewSection from "@/components/home/ReviewSection/ReviewSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <MainSection />
      <FeatureSection />
      <ReviewSection />
    </div>
  );
}
