import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  return (
    <div className={`${styles.features_section_container}`}>
      <div className={`${styles.features_section_wrapper}`}>
        <div className={`${styles.features_section_heading}`}>
          <span>
            Struggling to See Results or Stay Consistent? We Make it Easy!
          </span>
        </div>

        <div className={`${styles.nutri_plans_wrapper}`}>
          <div className={`${styles.nutri_plans_image}`}>
            <img
              src="/images/homepage/FeatureSection/NutriPlansImg.png"
              alt=""
            />
          </div>
          <div className={`${styles.nutri_plans_message_wrapper}`}>
            <div
              className={`${styles.nutri_plans_message_head} ${styles.message_head}`}
            >
              <span>Explore Nutri-Plans</span>
            </div>
            <div
              className={`${styles.nutri_plans_message_para} ${styles.message_para}`}
            >
              <span>
                Browse expert-crafted affordable plans from top nutritionists.
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.schedule_call_wrapper}`}>
          <div className={`${styles.schedule_call_message}`}>
            <div
              className={`${styles.schedule_call_message_head} ${styles.message_head}`}
            >
              <span>Book a Call</span>
            </div>
            <div
              className={`${styles.schedule_call_message_para} ${styles.message_para}`}
            >
              <span>
                Connect directly with the plan’s creator for personalized
                guidance.
              </span>
            </div>
          </div>
          <div className={`${styles.schedule_call_image}`}>
            <img
              src="/images/homepage/FeatureSection/CallScheduling.png"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.best_part_wrapper}`}>
          <div className={`${styles.best_part_message}`}>
            <div
              className={`${styles.best_part_message_head} ${styles.message_head}`}
            >
              <span>Thats the Best Part!!</span>
            </div>
            <div
              className={`${styles.best_part_message_para} ${styles.message_para}`}
            >
              <span>
                No hassle, no endless searching, no back-and-forth calls—just a
                quick and effortless way to reach your dream body!
              </span>
            </div>
          </div>
          <div className={`${styles.best_part_image}`}>
            <img
              src="/images/homepage/FeatureSection/bestPartBody.png"
              alt=""
            />
          </div>
        </div>

        <div className={`${styles.tracking_section_heading}`}>
          <span>
            Having a nutritionist and a plan is great, but if you don’t track,
            progress is just a guess—we’ve got you covered!
          </span>
        </div>
        <div className={`${styles.tracking_wrapper}`}>
          <div className={`${styles.tracking_message}`}>
            <div
              className={`${styles.tracking_message_head} ${styles.message_head}`}
            >
              <span>Track Your Calories Effortlessly!</span>
            </div>
            <div
              className={`${styles.tracking_message_para} ${styles.message_para}`}
            >
              <span>
                Stay on top of your nutrition with our easy-to-use calorie
                tracker because every meal counts!
              </span>
            </div>
          </div>
          <div className={`${styles.tracking_image_wrapper}`}>
            <img
              src="/images/homepage/FeatureSection/trackingImage.png"
              alt=""
              className={`${styles.tracking_bg_img}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
