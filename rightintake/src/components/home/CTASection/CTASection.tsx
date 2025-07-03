import StoreButtonsComponent from "@/components/StoreButtonsComponent/StoreButtonsComponent";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaWrapper}>
        <h2>Download Now! to</h2>
        <p>Try Free! for 3 days</p>
        <StoreButtonsComponent />
        <div className={styles.highlighter}>
          <p>Limited time offer!</p>
        </div>
      </div>
    </section>
  );
}
