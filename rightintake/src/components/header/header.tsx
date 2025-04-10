import styles from "./header.module.css";

export default function HeaderComponent() {
  return (
    <>
      <div className={`${styles.nav_component_container}`}>
        <div className={`${styles.nav_component_wrapper}`}>
          <a className={`${styles.brand_logo_wrapper}`} href="/">
            <img
              src="/images/header/rightintakelogo_website.png"
              alt="rightintakelogo_website"
            />
          </a>
        </div>
      </div>
    </>
  );
}
