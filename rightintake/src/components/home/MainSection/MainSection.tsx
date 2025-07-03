import StoreButtonsComponent from "@/components/StoreButtonsComponent/StoreButtonsComponent";
import styles from "./MainSection.module.css"; // Assuming you're using CSS Modules

export default function MainSection() {
  return (
    <div className={`${styles.main_section_container}`}>
      <div className={styles.main_section_text}>
        <h1 className={styles.main_section_text_heading}>
          Right Intake
          <br />
          <span className={styles.main_section_text_heading_para}>
            A fastest way to count your calories
          </span>
          <br />
        </h1>
        <span className={styles.main_section_text_heading_hashtag}>
          #The Right Intake Way
        </span>
        <p className={styles.main_section_text_para}>
          This is Right Intake a AI powered calorie counter where you can track
          your calories with just a snap and its 90 % accurate
        </p>
        <StoreButtonsComponent />
      </div>
    </div>
  );
}
