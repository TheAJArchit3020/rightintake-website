"use client";

import styles from "./header.module.css";

export default function HeaderComponent() {
  const handleAppRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    if (isAndroid) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake",
        "_blank"
      );
    } else if (isIOS) {
      window.open(
        "https://apps.apple.com/in/app/right-intake/id6738113419",
        "_blank"
      );
    } else {
      // Optional fallback
      window.open(
        "https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake",
        "_blank"
      );
    }
  };
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
          <div
            onClick={handleAppRedirect}
            rel="noopener noreferrer"
            className={styles.brand_app_button}
          >
            <span>Get the app</span>
          </div>

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
