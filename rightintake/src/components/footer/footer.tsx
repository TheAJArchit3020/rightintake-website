import StoreButtonsComponent from "../StoreButtonsComponent/StoreButtonsComponent";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer_container}`}>
      <div className={`${styles.footer_wrapper}`}>
        <div className={styles.footerBrand}>
          <a className={`${styles.footer_brand_wrapper}`} href="/">
            <img
              src="/images/header/rightintake_logo.svg"
              alt="rightintakelogo_website"
            />
          </a>
          <p>Download Right Intake</p>
          <StoreButtonsComponent />
        </div>
        <div>
          <h3>Legal</h3>
          <ul className={styles.LegalList}>
            <li>
              <a href="/privacy-policy" className={styles.legalEle}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/TermsandServices" className={styles.legalEle}>
                Terms of use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Socials</h3>
          <ul className={styles.LegalList}>
            <li>
              <a
                href="https://www.instagram.com/right.intake"
                className={styles.SocialsEle}
              >
                Instagram
                <img src="/images/instLogo.png" alt="Instagram Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>© Copyright 2025, All rights reserved</p>
      </div>
    </footer>
  );
}
