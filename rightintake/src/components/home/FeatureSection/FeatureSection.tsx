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
              src="/images/homepage/FeatureSection/snap_and_know.png"
              alt=""
            />
          </div>
          <div className={`${styles.nutri_plans_message_wrapper}`}>
            <div
              className={`${styles.nutri_plans_message_head} ${styles.message_head}`}
            >
              <span>Snap & Know</span>
            </div>
            <div
              className={`${styles.nutri_plans_message_para} ${styles.message_para}`}
            >
              <span>
                Take a quick photo of your meal and instantly get detailed
                nutrition insights.
              </span>
            </div>
          </div>
        </div>

        <div className={`${styles.schedule_call_wrapper}`}>
          <div className={`${styles.schedule_call_message}`}>
            <div
              className={`${styles.schedule_call_message_head} ${styles.message_head}`}
            >
              <span>Smart Food Scan</span>
            </div>
            <div
              className={`${styles.schedule_call_message_para} ${styles.message_para}`}
            >
              <span style={{ textAlign: "center" }}>
                Tap on any food photo to instantly view detailed nutritional
                facts and calorie counts.
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

        <div className={`${styles.nutri_plans_wrapper}`}>
          <div className={`${styles.nutri_plans_message_wrapper}`}>
            <div
              className={`${styles.nutri_plans_message_head} ${styles.message_head}`}
            >
              <span>Log Your Activity</span>
            </div>
            <div
              className={`${styles.nutri_plans_message_para} ${styles.message_para}`}
            >
              <span>
                Add your workouts or runs and get real-time calorie burn
                estimates based on your activity details.
              </span>
            </div>
          </div>
          <div
            className={`${styles.nutri_plans_image}`}
            style={{ width: "70%" }}
          >
            <img src="/images/homepage/FeatureSection/exercises.png" alt="" />
          </div>
        </div>

        <div className={`${styles.schedule_call_wrapper}`}>
          <div className={`${styles.schedule_call_message}`}>
            <div
              className={`${styles.schedule_call_message_head} ${styles.message_head}`}
            >
              <span>Track Every Move, Every Day</span>
            </div>
            <div
              className={`${styles.schedule_call_message_para} ${styles.message_para}`}
            >
              <span style={{ textAlign: "center" }}>
                Stay on top of your fitness with detailed logs for workouts,
                steps, and active minutes—all in one place.
              </span>
            </div>
          </div>
          <div
            className={`${styles.schedule_call_image}`}
            style={{ width: "70%" }}
          >
            <img
              src="/images/homepage/FeatureSection/everyday-move.png"
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
              <p>
                No hassle, no endless searching, no complicated steps—just quick
                tracking and an effortless path to your dream body!
              </p>
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
          <p>
            Having smart tools like meal scanning and activity logging means
            you’re no longer guessing — track with ease and stay on top of your
            goals!
          </p>
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
