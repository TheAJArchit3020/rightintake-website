import StoreButtonsComponent from "@/components/StoreButtonsComponent/StoreButtonsComponent";
import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgContainer}>
        <img
          src="/images/homepage/MainSection/main_bg.png"
          alt="bg"
          className={styles.heroBg}
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          A fastest way to count <br /> your calories
        </h1>
        <p className={styles.heroSubtitle}>
          AI-powered calorie counter. Snap a photo, get instant nutrition
          insights, and track your progress effortlessly.
        </p>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/homepage/MainSection/CalorieCounting_with_AI.png"
            alt="CaloriesCounting_with_AI"
            className={styles.heroAppImg}
          />
        </div>
      </div>
    </section>
  );
}
