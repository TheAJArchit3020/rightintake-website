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
              <span>Work Smarter, Eat Healthier</span>
            </div>
            <div className={`${styles.main_sec_head_content_2}`}>
              <span>#The RightIntake Way</span>
            </div>
            <div className={`${styles.main_sec_head_content_3}`}>
              <span>
                Right Intake helps you eat smarter, track better, and achieve
                your health goals effortlessly by connecting with top
                nutritionists near you.
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.download_app_container}`}>

          <a href="#" 
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

          <a href="https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake" target="_Blank" rel=""
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
