
import MainSection from "@/components/home/MainSection/MainSection";
import styles from "./page.module.css";
import HeaderComponent from "@/components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <MainSection/>
    </div>
  );
}
