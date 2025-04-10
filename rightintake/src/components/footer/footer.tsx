import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.footer_container}`}>
      <div className={`${styles.footer_wrapper}`}>
        <div className={`${styles.footer_line_wrapper}`}></div>
        <a className={`${styles.footer_brand_wrapper}`} href="/">
          <div className={`${styles.brand_logo_wrapper}`}>
            <img src="/images/header/rightintakelogo_website.png" alt="" />
          </div>

          <div className={`${styles.brand_name_wrapper}`}>
            <span>Right Intake</span>
          </div>
        </a>
        <a className={`${styles.t_and_c_container}`} href="/blog">
          <span>Blog</span>
        </a>
        <a className={`${styles.t_and_c_container}`} href="/TermsandServices">
          <span>Terms and services</span>
        </a>
        <div className={`${styles.contact_us_container}`}>
          <div className={`${styles.contact_us_heading}`}>
            <span>Contact Us</span>
          </div>
          <div className={`${styles.contact_us_email}`}>
            <span>contact@rightitnake.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
