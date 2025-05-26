import styles from "./header.module.css";

export default function HeaderComponent() {
  return (
    <>
      <div className={`${styles.nav_component_container}`}>
        <div className={`${styles.nav_component_wrapper}`}>
          <div className={`${styles.nav_component_wrapper_content}`}>
            <a className={`${styles.brand_logo_wrapper}`} href="/">
              <img
                src="/images/header/rightintakelogo_website.png"
                alt="rightintakelogo_website"
              />
            </a>
            <div className={`${styles.brand_logo_name}`}>
              <span>Right Intake</span>
            </div>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brand_app_button}
          >
            <span>Get the app</span>
          </a>

          {/* <div
            className={styles.brand_app_button}
            onClick={() => window.open('https://www.google.com', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <span>Get the app</span>
          </div> */}

        </div>
      </div>
    </>
  );
}
