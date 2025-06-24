import styles from "./MainSection.module.css"; // Assuming you're using CSS Modules

export default function MainSection() {
  return (
    <div className={`${styles.main_section_container}`}>
      <div className={`${styles.main_section_wrapper}`}>
        <div className={`${styles.main_section_image_wrapper}`}>
          <img src="/images/homepage/MainSection/home-main-image.png" alt="" />
        </div>

        <div className={`${styles.main_section_heading_wrapper}`}>
          <div className={`${styles.main_section_heading_content}`}>
            <div className={`${styles.main_sec_head_content_1}`}>
              <h1>Work Smarter, Eat Healthier</h1>
            </div>
            <div className={`${styles.main_sec_head_content_2}`}>
              <h1>#The RightIntake Way</h1>
            </div>
            <div className={`${styles.main_sec_head_content_3}`}>
              <p>
                Right Intake helps you eat smarter, track better, and achieve
                your health goals effortlessly by connecting with top
                nutritionists near you.
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className={`${styles.download_app_container}`}>
          <a
            href="https://apps.apple.com/in/app/right-intake/id6738113419"
            className={`${styles.download_app_appstore} ${styles.store_wrapper}`}
          >
            <div className={`${styles.appstore_logo}`}>
              <img src="/images/homepage/MainSection/appstore.png" alt="" />
            </div>
            <div
              className={`${styles.appstore_name} ${styles.store_name_wrapper}`}
            >
              <span>Download on the </span>
              <span>App store</span>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake"
            target="_Blank"
            rel=""
            className={`${styles.download_app_playstore} ${styles.store_wrapper}`}
          >
            <div className={`${styles.playstore_logo}`}>
              <img src="/images/homepage/MainSection/playstore.png" alt="" />
            </div>
            <div
              className={`${styles.playstore_name} ${styles.store_name_wrapper}`}
            >
              <span>Get it on </span>
              <span>Google play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
