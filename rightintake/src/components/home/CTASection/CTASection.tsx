import StoreButtonsComponent from "@/components/StoreButtonsComponent/StoreButtonsComponent";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaWrapper}>
        <h2>Download now & enjoy a 3-day free trial!</h2>
        <StoreButtonsComponent />
        <div className={styles.highlighter}>
          <p>Act now — offer ends soon!</p>
        </div>
      </div>
    </section>
  );
}
