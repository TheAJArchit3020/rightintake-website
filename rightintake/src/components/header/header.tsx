"use client";
import { useState } from "react";
import StoreButtonsComponent from "../StoreButtonsComponent/StoreButtonsComponent";
import styles from "./header.module.css";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToWhatsNew = () => {
    const whatsNewSection = document.querySelector('[data-section="whats-new"]');
    if (whatsNewSection) {
      whatsNewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`${styles.nav_component_container}`}>
        <div className={`${styles.nav_component_wrapper}`}>
          <div className={styles.nav_component_pages}>
            <div className={styles.navlogo_ham_wrapper}>
              <a className={`${styles.brand_logo_wrapper}`} href="/">
                <img
                  src="/images/header/rightintake_logo.svg"
                  alt="rightintakelogo_website"
                />
              </a>
              <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`${styles.bar} ${
                    menuOpen ? styles.barOpenTop : ""
                  }`}
                ></span>
                <span
                  className={`${styles.bar} ${
                    menuOpen ? styles.barOpenMid : ""
                  }`}
                ></span>
                <span
                  className={`${styles.bar} ${
                    menuOpen ? styles.barOpenBot : ""
                  }`}
                ></span>
              </button>
            </div>

            {/* Desktop nav */}
            <div
              className={`${styles.navButtons} ${
                menuOpen ? styles.navButtonsMobileOpen : ""
              }`}
            >
              <a href="/blog">Blog</a>
              <a href="#">#TheRightIntakeWay</a>
              <a href="#"onClick={scrollToWhatsNew}>Upcoming Features</a>
            </div>
            <StoreButtonsComponent
              className={`${styles.nav_component_stores} ${
                menuOpen ? styles.storeButtons_mobile : ""
              }`}
            />
          </div>
        </div>
      </header>
    </>
  );
}
